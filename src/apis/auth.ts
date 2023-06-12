import { AuthResponse, FindId, LoginRequest } from "@/interfaces/auth"
import { axiosInstance } from "./axios"
import axios, { Axios } from "axios"




export const login = async (user: LoginRequest) => {
      const { data } = await axios.post<AuthResponse>('/api/login', user)
      const response = data.data;
      console.log(response)
      return response
  }
export const findid = async (email: FindId) => {
      const { data } = await axios.post<any>('/api/findIdByEmail  ', email)
      const response = data.data;
      console.log(response)
      return response
  }
export const findbznum = async (bzmum: LoginRequest) => {
      const { data } = await axios.post<AuthResponse>('/api/findIdByEmail  ', bzmum)
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
  
 
