export type SignInInput = {
  email: string;
  password: string;
};

export type SignInResponse = {
  message: string;
  success: boolean;
  accessToken: string;
};
