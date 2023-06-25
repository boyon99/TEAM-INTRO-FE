import { login } from "@/apis/auth";
import Button from "@/components/button";
import Input from "@/components/input";
import { getBearerToken } from "@/utils/bearerToken";
import { getCookie, setCookie } from "@/utils/cookies";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {useState} from "react";
import Link from "next/link";
interface EnterForm {
  login_id: string;
  password: string;
  remember_me?: boolean;
}

export default function Login() {
  const [checked, setChecked] = useState(false)
  const navigate = useRouter()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<EnterForm>();
 
  const { mutate, error } = useMutation(login, {
    onSuccess: (data) => {
      setCookie('access_token', data?.access_token, data && { path: '/', maxAge: 60*60*24 })
      navigate.push("/dashboard/main")
    },
    onError: (err: AxiosError) => { 
      console.log(err)
    },
  })
 console.log(checked)
  const onValid = (data: EnterForm) => {
    mutate({...data, remember_me: checked})
  };
  const onClick = () => {
    setChecked(!checked)
  }

    return (
      <div className="flex h-[100vh]">
       <div className="w-[640px] bg-primary-500">
         <div className="ml-[calc(50%-230px/2)] pt-[220px] ">
            <Image src="/emblem1.png" alt="emblem1" height={230} width={230}/>
         </div>
         <div className="ml-[calc(50%-150px/2)] pt-[36px]">
             <Image src="/logo.png" alt="logo" height={16.27} width={150}/>
         </div>
         <div className="ml-[calc(50%-156px/2)] pt-[5px]">
           <span className="font-sans font-normal text-xs/[100%] text-primary-100 text-center underline">질링스 홈페이지 바로가기&rarr;</span>
         </div>
         <div className="w-[280px] h-[22px] ml-[calc(50%-132px)] pt-[170px]">
           <span className="font-sans font-bold text-[20px]/[100%] text-primary-100 text-center">회사소개페이지 제작 PLUG-IN</span>
         </div>
       </div>
       <div className="w-[640px]">
        <div className="ml-[calc(50%-360px/2)] pt-[203px]">
            <span className="align-top not-italic text-GrayScalePrimary-800 font-black text-[27px]/[100%] w-[85px] h-[32px] ml-[137.5px] top-[2px] tracking-[0.03em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">로그인</span>
           <form id="join" onSubmit={handleSubmit(onValid)} className="flex flex-col pt-[36px] w-[360px] h-[359px] left-0">
              <Input register={register('login_id',
              //  {
              //   required: "Email is required",
              //   pattern: {
              //     value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              //     message: "이메일 형식이 아닙니다.",
              //   },
              // }
              )} name="login_id" label="아이디" type="text" size="large"/>
              <Input register={register('password'       
              )} required name="password" label="비밀번호" type="password" size="large"/>
              {error && <span className="text-[red] text-sm ml-[4px]">이메일 또는 비밀번호가 일치하지 않습니다</span>}
              <div className="flex justify-between mt-4">
              
               <Input name="keep" label="로그인 상태 유지" type="login_checkbox" onClick={onClick}/>
               {watch('login_id') && watch('password') ? <Button disable={false} text="로그인" size="small"/> : <Button disable={true} text="로그인" size="small"/>}
              </div>
             
                 <Link href={'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=609700950942-lmjhqofit9h1mt8g76dokj7734mtja00.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftaeheoki.shop%3A443%2Fapi%2Fcallback&scope=openid%20email%20profile&response_type=code&service=lso&o2v=2&flowName=GeneralOAuthFlow'}>
              <div className="flex flex-row justify-center items-center p-[8px_0px] mt-4 gap-[8px] w-[356px] ml-[4px] h-[46px] border border-solid border-GrayScalePrimary-300 rounded-lg">
                 <Image src="/google.png" alt="google" height={28} width={28}/>
                 <span className="h-[16px] font-normal text-[15px]/[100%]">Google 로그인</span>
              </div>
                 </Link>
              <div className="relative flex flex-row items-center p-0 gap-1 mt-5 ml-[4px]">
                <Link href={'/findid'}>
                  <span className="w-[140px] h-[16px] font-normal text-[14px]/[100%] text-GrayScalePrimary-900 hover:underline">아이디</span>
                </Link>
                <span>/</span>
                <Link href={'/findpass'}>
                  <span className="w-[140px] h-[16px] font-normal text-[14px]/[100%] text-GrayScalePrimary-900 hover:underline">비밀번호 찾기</span>
                </Link>
                  <span className="h-[16px] font-normal border-r text-GrayScalePrimary-900"/>
                  <Link href={'/register'}>
                  <span className="w-[56px] h-[16px] font-normal text-[14px]/[100%] text-GrayScalePrimary-900 hover:underline">회원가입</span>
                  </Link>
                </div>
            </form>
        </div>
       </div>
       </div>
    )
}