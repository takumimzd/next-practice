"use client";

import { useRouter, useSearchParams } from "next/navigation";

type PatternSelectorProps = {
  selectedPattern: "combined" | "separated";
};

export function PatternSelector({ selectedPattern }: PatternSelectorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePatternChange = (pattern: "combined" | "separated") => {
    const params = new URLSearchParams(searchParams);
    params.set("pattern", pattern);
    router.push(`/combined-data?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        表示パターン:
      </label>
      <div className="flex gap-2">
        <button
          onClick={() => handlePatternChange("combined")}
          className={`rounded-md px-4 py-2 text-sm font-semibold transition-all ${
            selectedPattern === "combined"
              ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          }`}
        >
          統合パターン
        </button>
        <button
          onClick={() => handlePatternChange("separated")}
          className={`rounded-md px-4 py-2 text-sm font-semibold transition-all ${
            selectedPattern === "separated"
              ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          }`}
        >
          分離パターン
        </button>
      </div>
    </div>
  );
}
