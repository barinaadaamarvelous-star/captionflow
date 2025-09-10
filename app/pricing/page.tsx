"use client";

import React from "react";

export default function PricingPage() {
  // Function to call our /api/checkout endpoint
  async function handleCheckout(plan: "pro", billing: "monthly") {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, billing }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // Redirect user to Stripe Checkout
      } else {
        alert("Checkout failed: " + data.error);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">💰 Pricing Plans</h1>
      <p className="text-gray-600 mb-12">
        Choose the plan that fits your needs. Upgrade anytime.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <p className="text-4xl font-bold mb-4">$0</p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔️ 10 captions / month</li>
            <li>✔️ Basic templates</li>
            <li>❌ No export options</li>
          </ul>
          <button className="bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed">
            Current Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-600">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="text-4xl font-bold mb-4">
            $19<span className="text-lg">/mo</span>
          </p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔️ Unlimited captions</li>
            <li>✔️ Premium templates</li>
            <li>✔️ Export to social media</li>
          </ul>
          <button
            onClick={() => handleCheckout("pro", "monthly")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Upgrade
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
          <p className="text-4xl font-bold mb-4">Custom</p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔️ White-label solution</li>
            <li>✔️ API Access</li>
            <li>✔️ Dedicated support</li>
          </ul>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
