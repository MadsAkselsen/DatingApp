export interface User {
  id: string;
  displayName: string;
  token: string;
  imageUrl?: string;
}

export interface LoginCreds {
  email: string;
  password: string;
}

export interface RegisterCreds {
  displayName: string;
  username: string;
  password: string;
  email: string;
}
