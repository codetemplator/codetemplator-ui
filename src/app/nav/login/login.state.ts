export const loginState: LoginState = {
  showLoginModal: false,
  isLoggingIn: false,
  loginForm: {
    username: '',
    password: ''
  }
};

export interface LoginState {
  showLoginModal: boolean;
  isLoggingIn: boolean;
  loginForm: LoginForm;
}

export interface LoginForm {
  username: string;
  password: string;
}
