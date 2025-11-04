export default function TeamPage() {
  const teamMembers = [
    { name: '田中太郎', role: 'プロダクトマネージャー', avatar: '👨‍💼' },
    { name: '佐藤花子', role: 'リードデベロッパー', avatar: '👩‍💻' },
    { name: '鈴木一郎', role: 'UX/UIデザイナー', avatar: '👨‍🎨' },
    { name: '高橋美咲', role: 'QAエンジニア', avatar: '👩‍🔬' },
  ]

  return (
    <div>
      <div className="space-y-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-emerald-50 rounded hover:bg-emerald-100 transition-colors dark:bg-emerald-950 dark:hover:bg-emerald-900">
            <div className="text-3xl">{member.avatar}</div>
            <div className="flex-1">
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">{member.name}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{member.role}</p>
            </div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full dark:bg-emerald-400"></div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-zinc-100 rounded dark:bg-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          チームメンバー総数: <span className="font-bold text-zinc-900 dark:text-zinc-50">{teamMembers.length}</span>
        </p>
      </div>

      <p className="text-xs text-zinc-500 mt-4 dark:text-zinc-400">
        このコンテンツは @team/page.tsx から読み込まれています
      </p>
    </div>
  )
}
