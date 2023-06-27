import {
  AuthResponse,
  FindId,
  HistoryAdd,
  HistoryDelete,
  HistoryModify,
  LoginRequest,
  NewPass,
  NewsAdd,
  NewsDelete,
  NewsModify,
  ProductAdd,
  ProductDelete,
  ProductModify,
  RegisterRequest,
  TeamAdd,
  TeamDelete,
  TeamModify,
  UserModify,
  checkbiznumRequest,
  checkidRequest,
  emailcheckRequest,
  emailconfirmRequest,
} from '@/interfaces/auth';
import { axiosInstance } from './axios';

// 로그인
export const login = async (user: LoginRequest) => {
  const { data } = await axiosInstance().post<AuthResponse>('/api/login', user);
  const response = data.data;
  console.log(response);
  return response;
};

// 회원가입
export const signup = async (user: RegisterRequest) => {
  const { data } = await axiosInstance().post<any>('/api/join', user);
  const response = data.data;
  console.log(response);
  return response;
};

// 아이디 중복 확인
export const checkid = async (id: checkidRequest) => {
  const { data } = await axiosInstance().post<any>('/api/checkLoginId', id);
  const response = data.data;
  console.log(response);
  return response;
};
// 사업자등록번호 인증 확인
export const checknum = async (biznum: checkbiznumRequest) => {
  const { data } = await axiosInstance().post<any>('/api/validBizNum', biznum);
  const response = data.data;
  console.log(response);
  return response;
};
// 회원가입 이메일 인증 요청
export const emailcheck = async (email: emailcheckRequest) => {
  const { data } = await axiosInstance().post<any>('/api/validEmail', email);
  const response = data.data;
  console.log(response);
  return response;
};
// 회원가입 이메일 코드 확인
export const emailconfirm = async (code: emailconfirmRequest) => {
  const { data } = await axiosInstance().post<any>('/api/validEmailCheck', code);
  const response = data;
  console.log(response);
  return response;
};
// 아이디 찾기
export const findidbyemail = async (email: FindId) => {
  const { data } = await axiosInstance().post<any>('/api/findIdByEmail', email);
  const response = data.data;
  console.log(response);
  return response;
};

export const findidbybznum = async (bznum: FindId) => {
  const { data } = await axiosInstance().post<any>('/api/findIdByBizNum', bznum);
  const response = data.data;
  console.log(response);
  return response;
};

//비밀번호 찾기
export const findpass = async (pass: FindId) => {
  const { data } = await axiosInstance().put<any>('/api/password', pass);
  const response = data.data;
  console.log(response);
  return response;
};
//비밀번호 재설정
export const repass = async (newpass: NewPass) => {
  const { data } = await axiosInstance().put<any>('/api/s/user/password', newpass);
  const response = data.data;
  console.log(response);
  return response;
};
// 유저 기본정보 조회
export const user = async () => {
  const { data } = await axiosInstance().get<any>('/api/s/user');
  const response = data.data;
  return response;
};
// 유저 기본정보 수정
export const usermodify = async (user: UserModify) => {
  const { data } = await axiosInstance().put<any>('/api/s/user', user);
  const response = data.data;
  console.log(response);
  return response;
};
// 유저 회원 탈퇴
export const deleteuser = async () => {
  const { data } = await axiosInstance().delete<any>('/api/s/user');
  const response = data.data;
  console.log(response);
  return response;
};
// 제품/서비스 소개 상품 추가
export const productadd = async (item: ProductAdd) => {
  const { data } = await axiosInstance().post<any>('/api/s/user/introPage/productsAndServices/detail', item);
  const response = data.data;
  console.log(response);
  return response;
};
// 제품/서비스 요소들 삭제
export const productdelete = async (deleteitem: ProductDelete) => {
  const { data } = await axiosInstance().delete<any>('/api/s/user/introPage/productsAndServices/detail', {
    data: deleteitem,
  });
  const response = data.data;
  console.log(response);
  return response;
};
// 제품/서비스 메인페이지 저장하기
export const productview = async (modifyitem: ProductModify) => {
  const { data } = await axiosInstance().put<any>('/api/s/user/introPage/productsAndServices', modifyitem);
  const response = data.data;
  console.log(response);
  return response;
};

// 팀 멤버 요소 추가
export const teamadd = async (item: TeamAdd) => {
  const { data } = await axiosInstance().post<any>('/api/s/user/introPage/teamMember/detail', item);
  const response = data.data;
  console.log(response);
  return response;
};
// 팀 멤버 요소 삭제
export const teamdelete = async (deleteitem: TeamDelete) => {
  const { data } = await axiosInstance().delete<any>('/api/s/user/introPage/teamMember/detail', { data: deleteitem });
  const response = data.data;
  console.log(response);
  return response;
};
// 팀 멤버 메인페이지 저장하기
export const teamview = async (modifyitem: TeamModify) => {
  const { data } = await axiosInstance().put<any>('/api/s/user/introPage/teamMember', modifyitem);
  const response = data.data;
  console.log(response);
  return response;
};

// 연혁 요소 추가
export const historyadd = async (item: HistoryAdd) => {
  const { data } = await axiosInstance().post<any>('/api/s/user/introPage/history/detail', item);
  const response = data.data;
  console.log(response);
  return response;
};
// 연혁 요소 삭제
export const historydelete = async (deleteitem: HistoryDelete) => {
  const { data } = await axiosInstance().delete<any>('/api/s/user/introPage/history/detail', { data: deleteitem });
  const response = data.data;
  console.log(response);
  return response;
};
// 연혁 메인페이지 저장하기
export const historyview = async (modifyitem: HistoryModify) => {
  const { data } = await axiosInstance().put<any>('/api/s/user/introPage/history', modifyitem);
  const response = data.data;
  console.log(response);
  return response;
};

// 보도자료 불러오기
export const newsget = async (url: string) => {
  const { data } = await axiosInstance().get<any>(`/api/s/user/introPage/news/import?url=${url}`);
  const response = data.data;
  console.log(response);
  return response;
};
// 보도자료 요소 추가
export const newsadd = async (item: NewsAdd) => {
  const { data } = await axiosInstance().post<any>('/api/s/user/introPage/news/detail');
  const response = data.data;
  console.log(response);
  return response;
};

// 보도자료 요소 삭제
export const newsdelete = async (deleteitem: NewsDelete) => {
  const { data } = await axiosInstance().delete<any>('/api/s/user/introPage/news/detail', { data: deleteitem });
  const response = data.data;
  console.log(response);
  return response;
};
// 보도자료 메인페이지 저장
export const newsview = async (modifyitem: NewsModify) => {
  const { data } = await axiosInstance().put<any>('/api/s/user/introPage/news');
  const response = data.data;
  console.log(response);
  return response;
};
export const accesstoken = async (user: LoginRequest) => {
  const { data } = await axiosInstance().post<AuthResponse>('/api/accessToken', user);
  const response = data.data;
  console.log(response);
  return response;
};

export const getUser = async () => {
  const { data } = await axiosInstance().get('/api/s/user');

  return data;
};
