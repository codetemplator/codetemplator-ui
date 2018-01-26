export const userState: UserState = {
  user: null,
  isLoggedIn: false
};

export interface UserState {
  user: User;
  isLoggedIn: boolean;
}

export interface User {
  id: string;
  ttl: number;
  created: string;
  userId: string;
}
