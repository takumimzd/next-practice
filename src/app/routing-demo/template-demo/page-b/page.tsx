import Link from 'next/link'

export default function PageB() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Page B
      </h1>

      <section className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
        <p className="mb-2 text-emerald-900 dark:text-emerald-100">
          このページは <code className="rounded bg-white px-2 py-1 dark:bg-emerald-900">/template-demo/page-b/page.tsx</code> です。
        </p>
        <p className="text-sm text-emerald-800 dark:text-emerald-200">
          このページに遷移したとき、template.tsx が再度マウントされました。
        </p>
      </section>

      <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          ブラウザの開発者ツールを確認
        </h2>
        <p className="mb-4 text-zinc-700 dark:text-zinc-300">
          ブラウザの開発者ツール（F12キー）のコンソールを開いてみてください。
          ページ遷移のたびに「Template mounted at: ...」というログが出力されています。
        </p>
        <div className="rounded border border-zinc-200 bg-zinc-100 p-4 text-sm font-mono dark:border-zinc-700 dark:bg-zinc-800">
          <div className="text-emerald-600 dark:text-emerald-400">Console:</div>
          <div className="mt-1 text-zinc-700 dark:text-zinc-300">Template mounted at: 14:23:45</div>
          <div className="text-zinc-700 dark:text-zinc-300">Template mounted at: 14:23:52</div>
          <div className="text-zinc-700 dark:text-zinc-300">Template mounted at: 14:23:58</div>
        </div>
      </section>

      <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          他のページへ移動
        </h2>
        <div className="grid gap-3">
          <Link
            href="/routing-demo/template-demo"
            className="block rounded bg-purple-600 px-4 py-3 text-center text-white hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
          >
            メインページへ
          </Link>
          <Link
            href="/routing-demo/template-demo/page-a"
            className="block rounded bg-purple-600 px-4 py-3 text-center text-white hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
          >
            Page A へ
          </Link>
        </div>
      </section>

      <section className="mb-8 rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white dark:from-emerald-600 dark:to-teal-600">
        <h3 className="mb-3 text-xl font-semibold">🎨 Page B のコンテンツ</h3>
        <p className="mb-4">
          layout.tsx との違いを体感してみましょう。
          Nested Routing のデモと比較してみてください。
        </p>
        <div className="rounded bg-white bg-opacity-20 p-4">
          <p className="mb-3 text-sm">
            <strong>layout.tsx:</strong> 状態が保持され、再マウントされない
          </p>
          <p className="text-sm">
            <strong>template.tsx:</strong> 毎回新しいインスタンスが作成される
          </p>
        </div>
      </section>

      <section className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
        <h3 className="mb-2 font-semibold text-amber-900 dark:text-amber-50">💡 実践的な使用例</h3>
        <div className="space-y-3 text-sm text-amber-900 dark:text-amber-100">
          <div>
            <p className="font-semibold">1. ページビュートラッキング</p>
            <p className="text-xs text-amber-800 dark:text-amber-200">
              useEffect でページ遷移を検知してアナリティクスに送信
            </p>
          </div>
          <div>
            <p className="font-semibold">2. フォームのリセット</p>
            <p className="text-xs text-amber-800 dark:text-amber-200">
              ページ遷移のたびにフォームの状態を初期化
            </p>
          </div>
          <div>
            <p className="font-semibold">3. アニメーションの実装</p>
            <p className="text-xs text-amber-800 dark:text-amber-200">
              ページ遷移時の enter/exit アニメーションを制御
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
