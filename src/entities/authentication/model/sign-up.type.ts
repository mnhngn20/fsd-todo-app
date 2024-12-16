export type SignUpInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type SignUpResponse = {
  success: boolean;
  message: string;
};
