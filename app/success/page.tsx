export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center h-screen text-center bg-gray-50">
      <div className="max-w-lg p-8 bg-white rounded-2xl shadow">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          ✅ Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for upgrading to <span className="font-semibold">Pro</span>.
          Your account is now active 🎉
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}
