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
          <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded hover:bg-green-100 transition-colors">
            <div className="text-3xl">{member.avatar}</div>
            <div className="flex-1">
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded">
        <p className="text-sm text-gray-600">
          チームメンバー総数: <span className="font-bold">{teamMembers.length}</span>
        </p>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        このコンテンツは @team/page.tsx から読み込まれています
      </p>
    </div>
  )
}
