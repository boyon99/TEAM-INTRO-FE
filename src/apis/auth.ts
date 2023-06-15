import { AuthResponse, FindId, LoginRequest, NewPass, RegisterRequest, checkbiznumRequest, checkidRequest, emailcheckRequest, emailconfirmRequest } from "@/interfaces/auth"
import { axiosInstance } from "./axios"
import axios, { Axios } from "axios"



// 로그인
export const login = async (user: LoginRequest) => {
      const { data } = await axiosInstance.post<AuthResponse>('/api/login', user)
      const response = data.data;
      console.log(response)
      return response
  }

  // 회원가입
export const signup = async (user: RegisterRequest) => {
      const { data } = await axiosInstance.post<any>('/api/join', user)
      const response = data.data;
      console.log(response)
      return response
  }

  // 아이디 중복 확인
export const checkid = async (id: checkidRequest) => {
  const { data } = await axiosInstance.post<any>('/api/checkLoginId', id)
  const response = data.data;
  console.log(response)
  return response
}
// 사업자등록번호 인증 확인
export const checknum = async (biznum: checkbiznumRequest) => {
  const { data } = await axiosInstance.post<any>('/api/validBizNum', biznum)
  const response = data.data;
  console.log(response)
  return response
}
// 회원가입 이메일 인증 요청
export const emailcheck = async (email: emailcheckRequest) => {
  const { data } = await axiosInstance.post<any>('/api/validEmail', email)
  const response = data.data;
  console.log(response)
  return response
}
// 회원가입 이메일 코드 확인
export const emailconfirm = async (code: emailconfirmRequest) => {
  const { data } = await axiosInstance.post<any>('/api/validEmailCheck', code)
  const response = data;
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
  
 
