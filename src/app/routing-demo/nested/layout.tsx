import Link from 'next/link'

export default function NestedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white p-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Nested Layout</h2>
          <p className="text-sm text-indigo-200">
            このレイアウトは /routing-demo/nested 配下の全ページで共有されます
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <nav className="bg-white shadow rounded-lg p-4 mb-6">
          <div className="flex gap-4">
            <Link
              href="/routing-demo/nested"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              親ページ
            </Link>
            <Link
              href="/routing-demo/nested/dashboard"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Dashboard
            </Link>
            <Link
              href="/routing-demo/nested/settings"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Settings
            </Link>
            <Link
              href="/routing-demo/nested/profile"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Profile
            </Link>
          </div>
        </nav>

        <div className="bg-white shadow rounded-lg p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
