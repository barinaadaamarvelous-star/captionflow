import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100 text-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
          <h1 className="text-2xl font-bold mb-6">✨ CaptionFlow</h1>
          <nav className="flex flex-col gap-3">
            <a href="/" className="hover:bg-gray-200 rounded px-3 py-2">🏠 Dashboard</a>
            <a href="/editor" className="hover:bg-gray-200 rounded px-3 py-2">📝 Caption Editor</a>
            <a href="/settings" className="hover:bg-gray-200 rounded px-3 py-2">⚙️ Settings</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
