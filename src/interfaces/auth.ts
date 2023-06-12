
export interface LoginRequest {
    login_id: string
    password: string
    remember_me?: boolean
  }
export interface Response {
    access_token: string
    refresh_token: string
}
export interface AuthResponse {
    data: Response
  }

export interface FindId {
  email: string;
  bizNum: string;
  login_id?: string;
}
export interface NewPass {
  password: string;
  new_password: string;
}
