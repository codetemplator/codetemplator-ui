export const signupState: SignupState = {
  showModal: false,
  isSigningUp: false,
  signupForm: {
    username: '',
    email: '',
    password: ''
  },
  signupUser: null
};

export interface SignupState {
  showModal: boolean;
  isSigningUp: boolean;
  signupForm: SignupForm;
  signupUser: SignupUser;
}

export interface SignupForm {
  username: string;
  email: string;
  password: string;
}

export interface SignupUser {
  id: string;
  username: string;
  email: string;
}
