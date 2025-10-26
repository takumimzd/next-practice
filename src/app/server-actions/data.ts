// 簡易的なインメモリデータストア
// 本番環境ではデータベースを使用してください

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

let users: User[] = [];

export function getUsers(): User[] {
  return users;
}

export function addUserToStore(user: User): void {
  users = [user, ...users];
}

export function removeUserFromStore(userId: string): void {
  users = users.filter((user) => user.id !== userId);
}

export function clearUsers(): void {
  users = [];
}
