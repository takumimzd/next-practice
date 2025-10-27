export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type Album = {
  id: number;
  userId: number;
  title: string;
};
