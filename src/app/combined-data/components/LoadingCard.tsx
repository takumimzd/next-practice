type Props = {
  title: string;
};

export function LoadingCard({ title }: Props) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          {title}
        </h3>
        <div className="h-6 w-20 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
      </div>

      <div className="space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
        <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
        <div className="h-4 w-4/6 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-600 dark:border-zinc-600 dark:border-t-zinc-300"></div>
        <span>Loading {title.toLowerCase()}...</span>
      </div>
    </div>
  );
}
