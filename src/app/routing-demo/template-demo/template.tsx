'use client'

import { useEffect, useState } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const [mountTime, setMountTime] = useState<string>('')

  useEffect(() => {
    setMountTime(new Date().toLocaleTimeString('ja-JP'))
    console.log('Template mounted at:', new Date().toLocaleTimeString('ja-JP'))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="bg-purple-600 text-white p-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Template (再マウントされます)</h2>
          <p className="text-sm text-purple-200">
            マウント時刻: {mountTime || 'Loading...'}
          </p>
          <p className="text-xs text-purple-300 mt-1">
            ページ遷移のたびに、この時刻が更新されます
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {children}
      </div>
    </div>
  )
}
