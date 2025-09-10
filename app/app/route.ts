// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { plan, billing } = body || {};

    if (!plan || !billing) {
      return NextResponse.json({ error: "Missing plan or billing" }, { status: 400 });
    }

    // <-- Replace these with your real Price IDs from Stripe dashboard -->
    const priceIds: Record<string, Record<string, string>> = {
      pro: {
        monthly: "price_1S5u3R1JX2R1Q9rwDUyHR7U7",
        yearly: "price_XXXXXXXXXXXXXXXX_yearly",
      },
    };

    const priceId = priceIds[plan]?.[billing];
    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan/billing" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
