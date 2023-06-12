import { AuthResponse, FindId, LoginRequest } from "@/interfaces/auth"
import { axiosInstance } from "./axios"
import axios, { Axios } from "axios"




export const login = async (user: LoginRequest) => {
      const { data } = await axios.post<AuthResponse>('/api/login', user)
      const response = data.data;
      console.log(response)
      return response
  }
export const findidbyemail = async (email: FindId) => {
      const { data } = await axios.post<any>('/api/findIdByEmail  ', email)
      const response = data.data;
      console.log(response)
      return response
  }

export const findidbybznum = async (bznum: FindId) => {
      const { data } = await axios.post<any>('/api/findIdByBizNum', bznum)
      const response = data.data;
      console.log(response)
      return response
  }


export const accesstoken = async (user: LoginRequest) => {
      const { data } = await axios.post<AuthResponse>('/api/accessToken', user)
      const response = data.data;
      console.log(response)
      return response
  }
  
 
