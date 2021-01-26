export interface SignUpRequest {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface SignInRequest {
  login: string;
  password: string;
}

export interface UserResponse {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export type UserRequest = Partial<SignUpRequest>;

export interface PasswordRequest {
  oldPassword: string;
  newPassword: string;
}
