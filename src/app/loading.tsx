export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <div className="text-center">
        <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900 dark:border-zinc-800 dark:border-t-zinc-50"></div>
        <p className="text-zinc-600 dark:text-zinc-400">読み込み中...</p>
      </div>
    </div>
  );
}
