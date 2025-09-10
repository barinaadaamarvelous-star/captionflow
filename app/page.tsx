export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="w-full py-4 px-8 flex justify-between items-center shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-blue-600">CaptionFlow</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#about" className="hover:text-blue-600">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
        <h2 className="text-5xl font-extrabold text-blue-600 mb-4">
          🚀 Auto-Generate Captions Instantly
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Create beautiful, engaging captions with templates designed to boost
          your social media content — in just seconds.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition">
          Try it Now
        </button>
      </main>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white text-center px-6">
        <h3 className="text-3xl font-bold mb-10">✨ Features</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Smart Templates</h4>
            <p className="text-gray-600">
              Choose from modern, stylish caption templates optimized for social media.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">One-Click Export</h4>
            <p className="text-gray-600">
              Download your captions instantly in multiple formats — ready to post.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">AI Suggestions</h4>
            <p className="text-gray-600">
              Get smart suggestions that make your captions stand out effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-gray-100 border-t">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} CaptionFlow. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
