import Link from 'next/link'

export default function RoutingDemoPage() {
  const demos = [
    {
      title: 'Page Routing',
      emoji: '📄',
      description: 'ページ遷移の基本。page.tsxファイルでルートを定義します。',
      href: '/routing-demo/basic',
    },
    {
      title: 'Dynamic Routing',
      emoji: '🔀',
      description: 'URLパラメータを使った動的なルーティング。[id]の形式で定義します。',
      href: '/routing-demo/dynamic/123',
    },
    {
      title: 'Catch-all Routing',
      emoji: '🎯',
      description: '階層をまとめて受け取る。[...slug]の形式で任意の深さのパスを受け取ります。',
      href: '/routing-demo/catch-all/docs/api/reference',
    },
    {
      title: 'Nested Routing',
      emoji: '📦',
      description: 'UIの入れ子構造。親子関係のあるページ構成とレイアウト共有を実現します。',
      href: '/routing-demo/nested',
    },
    {
      title: 'Parallel Routing',
      emoji: '⚡',
      description: '複数のUIを同時に描画。@folderの形式でスロットを定義します。',
      href: '/routing-demo/parallel',
    },
    {
      title: 'Intercepting Routing',
      emoji: '🔄',
      description: '特定ルートの一時置換。モーダルなどに利用される(.)記法を使います。',
      href: '/routing-demo/intercepting/photos',
    },
    {
      title: 'Special Files',
      emoji: '⚙️',
      description: 'loading.tsx, error.tsx, not-found.tsxなどの特殊ファイルの使い方。',
      href: '/routing-demo/special-files',
    },
    {
      title: 'Template',
      emoji: '📋',
      description: 'レイアウトと似ているが、再マウントされる。フォームリセットなどに有効。',
      href: '/routing-demo/template-demo',
    },
  ]

  const specialFiles = [
    { name: 'page.tsx', description: 'ルートに対応するページ' },
    { name: 'layout.tsx', description: '共通レイアウト（状態を保持）' },
    { name: 'template.tsx', description: 'レイアウトと似ているが、再マウントされる' },
    { name: 'loading.tsx', description: 'Suspense の fallback UI' },
    { name: 'error.tsx', description: 'エラーハンドリング用コンポーネント' },
    { name: 'not-found.tsx', description: '404 ページ' },
    { name: 'route.ts', description: 'API Route（サーバー専用）' },
    { name: 'default.tsx', description: '並列ルートで未マウント時のデフォルト' },
  ]

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Next.js Routing Demo
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          Next.js App Routerの様々なルーティングパターンを実際に体験できるデモページです。
        </p>

        {/* デモカードグリッド */}
        <div className="grid gap-4 md:grid-cols-2 mb-12">
          {demos.map((demo) => (
            <Link
              key={demo.href}
              href={demo.href}
              className="group block p-6 rounded-lg bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all dark:bg-zinc-950 dark:border-zinc-800"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{demo.emoji}</span>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold mb-2 text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-50 dark:group-hover:text-zinc-300">
                    {demo.title}
                  </h2>
                  <p className="text-zinc-600 text-sm dark:text-zinc-400">
                    {demo.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 特殊ファイルの説明 */}
        <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h2 className="mb-3 text-xl font-semibold text-emerald-900 dark:text-emerald-50 flex items-center gap-2">
            <span>📚</span>
            特殊ファイルの役割
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {specialFiles.map((file, index) => (
              <div
                key={file.name}
                className="flex items-start gap-3 p-4 rounded-lg bg-white border border-emerald-100 dark:bg-emerald-900 dark:border-emerald-800"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-semibold dark:bg-emerald-700">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <code className="bg-emerald-100 px-2 py-1 rounded font-mono text-sm font-semibold text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100">
                    {file.name}
                  </code>
                  <p className="text-sm text-emerald-800 mt-1 dark:text-emerald-200">{file.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
