"use client";

import { createContext, use, useState } from "react";

// テーマContextの作成
type Theme = "light" | "dark" | "auto";
const ThemeContext = createContext<Theme>("light");

// 設定Contextの作成
type Settings = {
  fontSize: "small" | "medium" | "large";
  language: "ja" | "en";
};
const SettingsContext = createContext<Settings>({
  fontSize: "medium",
  language: "ja",
});

/**
 * 条件付きでContextを読み取るコンポーネント
 *
 * ポイント:
 * - useContextと違い、if文の中でuseを呼び出せる
 * - これにより、条件に応じて異なるContextを読み取れる
 */
function ConditionalDisplay({ showTheme }: { showTheme: boolean }) {
  // 従来のuseContextではこのような書き方はできない
  // useは条件文の中で呼び出せる！
  if (showTheme) {
    const theme = use(ThemeContext);
    return (
      <div className="rounded-md bg-indigo-50 p-3 dark:bg-indigo-950">
        <div className="text-sm font-semibold text-indigo-900 dark:text-indigo-50">
          現在のテーマ: {theme}
        </div>
        <div className="mt-1 text-xs text-indigo-600 dark:text-indigo-400">
          ThemeContextから読み取りました
        </div>
      </div>
    );
  } else {
    const settings = use(SettingsContext);
    return (
      <div className="rounded-md bg-pink-50 p-3 dark:bg-pink-950">
        <div className="text-sm font-semibold text-pink-900 dark:text-pink-50">
          設定:
        </div>
        <div className="mt-2 space-y-1 text-xs text-pink-700 dark:text-pink-300">
          <div>フォントサイズ: {settings.fontSize}</div>
          <div>言語: {settings.language}</div>
        </div>
        <div className="mt-2 text-xs text-pink-600 dark:text-pink-400">
          SettingsContextから読み取りました
        </div>
      </div>
    );
  }
}

/**
 * ループ内でContextを読み取る例
 */
function ListItem({ index, useTheme }: { index: number; useTheme: boolean }) {
  // ループの各要素で条件に応じてContextを読み取る
  if (useTheme) {
    const theme = use(ThemeContext);
    return (
      <li className="rounded border border-indigo-200 bg-indigo-50 p-2 text-xs dark:border-indigo-800 dark:bg-indigo-950">
        アイテム {index}: テーマは {theme}
      </li>
    );
  }

  const settings = use(SettingsContext);
  return (
    <li className="rounded border border-pink-200 bg-pink-50 p-2 text-xs dark:border-pink-800 dark:bg-pink-950">
      アイテム {index}: 言語は {settings.language}
    </li>
  );
}

/**
 * useContextとの比較を示すメインコンポーネント
 */
export function ConditionalContextExample() {
  const [showTheme, setShowTheme] = useState(true);
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");
  const [settings, setSettings] = useState<Settings>({
    fontSize: "medium",
    language: "ja",
  });

  return (
    <ThemeContext.Provider value={currentTheme}>
      <SettingsContext.Provider value={settings}>
        <div className="space-y-4">
          {/* Controls */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowTheme(!showTheme)}
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              表示切り替え: {showTheme ? "テーマ" : "設定"}
            </button>

            <select
              value={currentTheme}
              onChange={(e) => setCurrentTheme(e.target.value as Theme)}
              className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>

            <select
              value={settings.language}
              onChange={(e) =>
                setSettings({ ...settings, language: e.target.value as "ja" | "en" })
              }
              className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              <option value="ja">日本語</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Conditional Display */}
          <div>
            <div className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              条件付きContext読み取り:
            </div>
            <ConditionalDisplay showTheme={showTheme} />
          </div>

          {/* Loop Example */}
          <div>
            <div className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              ループ内でのContext読み取り:
            </div>
            <ul className="space-y-2">
              {[1, 2, 3].map((index) => (
                <ListItem
                  key={index}
                  index={index}
                  useTheme={index % 2 === 0}
                />
              ))}
            </ul>
          </div>

          {/* Explanation */}
          <div className="rounded-md bg-amber-50 p-4 dark:bg-amber-950">
            <div className="mb-2 text-sm font-semibold text-amber-900 dark:text-amber-50">
              💡 useContextとの違い
            </div>
            <div className="space-y-2 text-xs text-amber-800 dark:text-amber-200">
              <p>
                <strong>useContext:</strong> 条件文やループの中で呼び出せない
              </p>
              <p>
                <strong>use:</strong> if文やループの中で自由に呼び出せる
              </p>
              <p className="mt-3 text-amber-700 dark:text-amber-300">
                この柔軟性により、条件に応じて異なるContextを読み取ったり、
                ループの各要素で動的にContextを使用できます。
              </p>
            </div>
          </div>
        </div>
      </SettingsContext.Provider>
    </ThemeContext.Provider>
  );
}
