export type RegisterInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
};
