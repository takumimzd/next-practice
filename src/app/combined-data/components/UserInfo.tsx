import { fetchUser } from "../api";

type Props = {
  userId: number;
};

export async function UserInfo({ userId }: Props) {
  const user = await fetchUser(userId);

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {user.name}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            @{user.username}
          </p>
        </div>
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
          CACHED
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <span className="text-zinc-500">📧</span>
          <div>
            <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {user.email}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-zinc-500">📱</span>
          <div>
            <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Phone
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {user.phone}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-zinc-500">🌐</span>
          <div>
            <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Website
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {user.website}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-zinc-500">📍</span>
          <div>
            <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Address
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {user.address.suite} {user.address.street}, {user.address.city}{" "}
              {user.address.zipcode}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-zinc-500">🏢</span>
          <div>
            <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Company
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {user.company.name}
            </div>
            <div className="text-xs italic text-zinc-500 dark:text-zinc-500">
              &quot;{user.company.catchPhrase}&quot;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
