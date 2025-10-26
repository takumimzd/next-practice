export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type Album = {
  id: number;
  userId: number;
  title: string;
};
