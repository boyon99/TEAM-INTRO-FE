import { AuthResponse, FindId, LoginRequest, NewPass } from "@/interfaces/auth"
import { axiosInstance } from "./axios"
import axios, { Axios } from "axios"




export const login = async (user: LoginRequest) => {
      const { data } = await axiosInstance.post<AuthResponse>('/api/login', user)
      const response = data.data;
      console.log(response)
      return response
  }
  // 아이디 찾기
export const findidbyemail = async (email: FindId) => {
      const { data } = await axiosInstance.post<any>('/api/findIdByEmail  ', email)
      const response = data.data;
      console.log(response)
      return response
  }

export const findidbybznum = async (bznum: FindId) => {
      const { data } = await axiosInstance.post<any>('/api/findIdByBizNum', bznum)
      const response = data.data;
      console.log(response)
      return response
  }

//비밀번호 찾기
export const findpass = async (pass: FindId) => {
  const { data } = await axiosInstance.put<any>('/api/password', pass)
  const response = data.data;
  console.log(response)
  return response
}
//비밀번호 재설정
export const repass = async (newpass: NewPass) => {
  const { data } = await axiosInstance.put<any>('/api/s/user/password', newpass)
  const response = data.data;
  console.log(response)
  return response
}
export const accesstoken = async (user: LoginRequest) => {
      const { data } = await axiosInstance.post<AuthResponse>('/api/accessToken', user)
      const response = data.data;
      console.log(response)
      return response
  }
  
 
