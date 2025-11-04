import Link from 'next/link'

export default function NestedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <div className="bg-indigo-600 text-white p-4 dark:bg-indigo-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Nested Layout</h2>
          <p className="text-sm text-indigo-200 dark:text-indigo-100">
            このレイアウトは /routing-demo/nested 配下の全ページで共有されます
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <Link
          href="/routing-demo"
          className="mb-4 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Routing Demo
        </Link>

        <nav className="bg-white shadow rounded-lg p-4 mb-6 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/routing-demo/nested"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
            >
              親ページ
            </Link>
            <Link
              href="/routing-demo/nested/dashboard"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
            >
              Dashboard
            </Link>
            <Link
              href="/routing-demo/nested/settings"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
            >
              Settings
            </Link>
            <Link
              href="/routing-demo/nested/profile"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
            >
              Profile
            </Link>
          </div>
        </nav>

        <div className="bg-white shadow rounded-lg p-6 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
          {children}
        </div>
      </div>
    </div>
  )
}
