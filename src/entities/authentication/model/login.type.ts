export type LoginInput = {
  email: string;
  password: string;
};

export type LoginResponse = {
  message: string;
  success: boolean;
  accessToken: string;
};
