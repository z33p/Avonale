export interface Repository {
  id: number;
  name: string;
}

export interface FavRepo {
  id: number;
  repoId: number;
  isToggled: boolean;
}
