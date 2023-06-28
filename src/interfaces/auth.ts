
export interface LoginRequest {
    login_id: string
    password: string
    remember_me?: boolean
  }
export interface RegisterRequest {
    email: string
    password: string
    login_id: string
    biz_num: string
  }
export interface checkidRequest {
  login_id: string
}
export interface checkbiznumRequest {
  biz_num: string
}
export interface emailcheckRequest {
  email: string
  dup_check: boolean
}
export interface emailconfirmRequest {
  code: string
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
  biz_num: string;
  login_id?: string;
}
export interface NewPass {
  password: string;
  new_password: string;
}

export interface UserModify {
  email: string;
  profile: string;
  marketing: boolean;
}
export interface ProductAdd {
  name: string;
  title: string;
  description: string;
  image: string;
}
export interface ProductDelete {
  delete_list: number[]
}
export interface ProductModify {
  widget_status: boolean;
  order_list: (number | undefined)[];
  call_to_action_status: boolean;
  description: string;
  text: string;
  link: string;
}
// 팀 멤버
export interface TeamAdd {
  name: string;
  group: string;
  position: string;
  tagline: string;
  email: string;
  profile: string;
}
export interface TeamDelete {
  delete_list: number[]
}
export interface TeamModify {
  widget_status: boolean;
  order_list: (number | undefined)[];
}
// 연혁
export interface HistoryAdd {
  image: string;
  date: string;
  title: string;
  description: string;
}
export interface HistoryDelete {
  delete_list: number[]
}
export interface HistoryModify {
  widget_status: boolean;
}
//보도자료
export interface NewsAdd {
  image: string;
  date: string;
  title: string;
  press: string;
  description: string;
}
export interface NewsDelete {
  delete_list: number[]
}
export interface NewsModify {
  widget_status: boolean;
  order_list: (number | undefined)[];
}