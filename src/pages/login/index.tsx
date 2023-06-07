import { login } from "@/apis/auth";
import Button from "@/components/button";
import Input from "@/components/input";
import { getBearerToken } from "@/utiles/bearerToken";
import { setCookie } from "@/utiles/cookies";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface EnterForm {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useRouter()
  const { register, handleSubmit, reset } = useForm<EnterForm>();

  const { mutate, error } = useMutation(login, {
    onSuccess: (data) => {
      setCookie('accessToken', getBearerToken(data?.accessToken), data && { path: '/', maxAge: 60*60*24 })
      setCookie('refreshToken', getBearerToken(data?.refreshToken), data && { path: '/', maxAge: 60*60*24 })
      // navigate.push("/")
    },
    onError: (err: AxiosError) => { 
      console.log(err)
    },
  })

  const onValid = (data: EnterForm) => {
    mutate(data)
  };

    return (
      <div>
       <div className="absolute left-0 right-1/2 top-0 bottom-0 bg-primary-500">
         <div className="absolute left-[calc(50%_-_230px/2)] top-[26.44%] bottom-[45.91%]">
            <Image src="/emblem1.png" alt="emblem1" height={230} width={230}/>
         </div>
         <div className="absolute left-[calc(50%-150px/2)] top-[60%] bottom-[39.63%]">
             <Image src="/logo.png" alt="logo" height={16.27} width={150}/>
         </div>
         <div className="absolute w-[156px] h-[14px] left-[calc(50%-156px/2)] top-[calc(50%-14px/2+107px)]">
           <span className="font-sans font-normal text-xs/[100%] text-primary-100 text-center underline">질링스 홈페이지 바로가기&rarr;</span>
         </div>
         <div className="absolute w-[280px] h-[22px] left-[calc(50%-132px)] top-[calc(50%+330px)]">
           <span className="font-sans font-bold text-[20px]/[100%] text-primary-100 text-center">회사소개페이지 제작 PLUG-IN</span>
         </div>
       </div>
       <div className="absolute left-[50.16%] right-[-0.16%] top-0 bottom-0 rounded">
        <div className="absolute w-[360px] h-[427px] left-[calc(50%-360px/2)] top-[calc(50%-427px/2+0.5px)]">
            <span className="align-top not-italic text-GrayScalePrimary-800 font-black text-[27px]/[100%] absolute w-[85px] h-[32px] left-[137.5px] top-[2px] tracking-[0.03em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">로그인</span>
           <form onSubmit={handleSubmit(onValid)} className="flex flex-col p-0 gap-[30px] absolute w-[360px] h-[359px] left-0 top-[66px]">
              <Input register={register('email')} required name="email" label="아이디" type="email" size="large"/>
              <Input register={register('password')} required name="password" label="비밀번호" type="password" size="large"/>
              {/* <Input name="keep" label="email" type="checkbox"/> */}
              <div className="w-[360px] h-[46px] right-0 top-[237px]">
                <div className="relative flex flex-row items-center p-0 gap-1">
                  <span className="w-[56px] h-[16px] font-normal text-[14px]/[100%] text-GrayScalePrimary-900">회원가입</span>
                  <span className="h-[16px] font-normal border-r text-GrayScalePrimary-900"/>
                  <span className="w-[105px] h-[16px] font-normal text-[14px]/[100%] text-GrayScalePrimary-900">비밀번호 재설정</span>
                <Button disable={true} text="이메일로 로그인" size="large"/>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center p-[8px_0px] gap-[8px] w-[360px] h-[46px] border border-solid border-GrayScalePrimary-300 rounded-lg">
                 <Image src="/google.png" alt="google" height={28} width={28}/>
                 <span className="h-[16px] font-normal text-[15px]/[100%]">Google 로그인</span>
              </div>
            </form> 
        </div>
       </div>
       </div>
    )
}