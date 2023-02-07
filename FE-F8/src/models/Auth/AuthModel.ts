export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  codeVerify: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  email: string;
  token: string;
}
