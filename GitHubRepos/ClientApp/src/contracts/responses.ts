interface User {
  login: string;
  id: number;
  avatar_url: string;
}

export type Contributor = User;

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string;
  updated_at: string;
  owner: User;
}

export interface FavRepo {
  repoId: number;
  name: string;
  user: string;
}
