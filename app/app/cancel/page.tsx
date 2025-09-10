export default function CancelPage() {
  return (
    <div className="flex items-center justify-center h-screen text-center bg-gray-50">
      <div className="max-w-lg p-8 bg-white rounded-2xl shadow">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          ❌ Payment Cancelled
        </h1>
        <p className="text-gray-700 mb-6">
          No worries! You can upgrade anytime when you’re ready.
        </p>
        <a
          href="/pricing"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Back to Pricing
        </a>
      </div>
    </div>
  );
}
