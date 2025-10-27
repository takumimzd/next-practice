import { fetchUserAlbums } from "../api";

type Props = {
  userId: number;
};

export async function UserAlbums({ userId }: Props) {
  const albums = await fetchUserAlbums(userId);

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          Albums
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {albums.length} albums
          </span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            CACHED 10m
          </span>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {albums.map((album) => (
          <div
            key={album.id}
            className="rounded-md border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-2xl">📸</span>
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                #{album.id}
              </span>
            </div>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {album.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
