
export interface LoginRequest {
    email: string
    password: string
  }
export interface Response {
    accessToken: string
    refreshToken: string
}
export interface AuthResponse {
    data: Response
  }

