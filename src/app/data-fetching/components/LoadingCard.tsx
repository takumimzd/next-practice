type LoadingCardProps = {
  title: string;
  badge: {
    text: string;
    color: "green" | "orange";
  };
};

export function LoadingCard({ title, badge }: LoadingCardProps) {
  const badgeColorClasses =
    badge.color === "green"
      ? "bg-green-100 dark:bg-green-900"
      : "bg-orange-100 dark:bg-orange-900";

  return (
    <div className="animate-pulse rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-4 flex items-center justify-between">
        <div className="h-8 w-32 rounded bg-zinc-200 dark:bg-zinc-800"></div>
        <div
          className={`h-6 w-20 rounded-full ${badgeColorClasses}`}
        ></div>
      </div>
      <div className="mb-6 h-4 w-full rounded bg-zinc-100 dark:bg-zinc-900"></div>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-20 rounded-md border border-zinc-200 dark:border-zinc-800"
          ></div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-600 dark:border-zinc-700 dark:border-t-zinc-400"></div>
        <span>{title}を読み込み中...</span>
      </div>
    </div>
  );
}
