import Link from 'next/link'

export default function PageA() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Page A
      </h1>

      <section className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
        <p className="mb-2 text-blue-900 dark:text-blue-100">
          このページは <code className="rounded bg-white px-2 py-1 dark:bg-blue-900">/template-demo/page-a/page.tsx</code> です。
        </p>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          このページに遷移したとき、template.tsx が再マウントされ、
          上部のマウント時刻が更新されました。
        </p>
      </section>

      <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          再マウントの確認
        </h2>
        <p className="mb-4 text-zinc-700 dark:text-zinc-300">
          ページ上部のヘッダーを見てください。「マウント時刻」が、
          あなたがこのページに遷移した時刻になっているはずです。
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          これは、template.tsx の useEffect が再実行された証拠です。
        </p>
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
            href="/routing-demo/template-demo/page-b"
            className="block rounded bg-purple-600 px-4 py-3 text-center text-white hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
          >
            Page B へ
          </Link>
        </div>
      </section>

      <section className="mb-8 rounded-lg border border-blue-200 bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white dark:from-blue-600 dark:to-purple-600">
        <h3 className="mb-3 text-xl font-semibold">🎨 Page A のコンテンツ</h3>
        <p className="mb-4">
          各ページは独自のコンテンツを持っていますが、
          template.tsx で定義された共通のラッパーに包まれています。
        </p>
        <div className="rounded bg-white bg-opacity-20 p-4">
          <p className="text-sm">
            template.tsx は、ページごとに新しいインスタンスが作成されるため、
            ページ遷移アニメーションやページビュートラッキングに最適です。
          </p>
        </div>
      </section>
    </div>
  )
}
