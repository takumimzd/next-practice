'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Template({ children }: { children: React.ReactNode }) {
  const [mountTime, setMountTime] = useState<string>('')

  useEffect(() => {
    setMountTime(new Date().toLocaleTimeString('ja-JP'))
    console.log('Template mounted at:', new Date().toLocaleTimeString('ja-JP'))
  }, [])

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 dark:from-purple-700 dark:to-pink-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Template (再マウントされます)</h2>
          <p className="text-sm text-purple-100">
            マウント時刻: {mountTime || 'Loading...'}
          </p>
          <p className="text-xs text-purple-200 mt-1">
            ページ遷移のたびに、この時刻が更新されます
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/routing-demo"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Routing Demo
        </Link>

        {children}
      </main>
    </div>
  )
}
