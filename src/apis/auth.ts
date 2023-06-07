import { AuthResponse, LoginRequest } from "@/interfaces/auth"
import { axiosInstance } from "./axios"




export const login = async (user: LoginRequest) => {
    try {
      const { data } = await axiosInstance.post<AuthResponse>('/api/login', user)
      return data
    } catch (error) {
      console.log(error)
    }
  }
  
 