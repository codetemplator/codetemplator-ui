export const userState: UserState = {
  user: null
}

export interface UserState {
  user: User
}

export interface User {
  id: string;
  ttl: number;
  created: string;
  userId: string;
}
