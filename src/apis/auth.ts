import { AuthResponse, LoginRequest } from "@/interfaces/auth"
import { axiosInstance } from "./axios"
import axios, { Axios } from "axios"




export const login = async (user: LoginRequest) => {
    // try {
      const { data } = await axios.post<AuthResponse>('/api/login', user)
      const response = data.data;
      console.log(response)
      return response
    // } catch (error) {
    //   console.log(error)
    // }
  }
  
 
  