import { findid } from "@/apis/auth";
import Button from "@/components/button"
import Input from "@/components/input"
import { cls } from "@/utiles/utile";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image"
import { useState } from "react";
import { useForm } from "react-hook-form";

interface EnterForm {
    email: string;
    bznum: string;
  }


function FindId() {
    const { mutate, error } = useMutation(findid, {
        onSuccess: (data) => {
         
          console.log(data)
        },
        onError: (err: AxiosError) => { 
          console.log(err)
        },
      })
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<EnterForm>();
    const [method, setMethod] = useState<"email" | "bznum">("email");

    const onEmailClick = () => {
        reset();
        setMethod("email");
      }
      const onPhoneClick = () => {
        reset();
        setMethod("bznum");
      }
    
      const onValid = (data:EnterForm) => {
        mutate(data)
      };
    
    return (
        <div>
           <div className='h-[65px] border-solid border-b-[1px] border-primary-500'>
            <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className='ml-[20px] mt-[10px]'/>
           </div>
           <div className='w-[120px] h-[24px] m-[0_auto] mt-[148px] mb-[52px]'>
         <p className="text-[22px]/[100%] font-bold ">아이디 찾기</p>
       </div>

     <div>
        <span className="w-[252px] h-[16px] text-sm/[100%] ml-[441px]">고객님의 정보와 일치하는 아이디입니다.</span>
        <div className="relative w-[400px] h-[100px] ml-[calc(50%-400px/2)] mt-[24px] border border-solid border-[#cfced7] rounded-lg mb-[48px]">
         <span className="absolute text-2xl/[100%] font-bold text-[#403f4e] mt-[32px] ml-[132px]">example123</span>
        </div>
        <div className="w-[376px] h-[46px] ml-[calc(50%-376px/2)] space-x-[16px]">
            <Button disable={false} text="로그인 하기" size="xlarge"/>
            <Button disable={false} text="비밀번호 찾기" size="xlarge"/>
        </div>
     </div> 
     
       {/* <>
       <div className="w-[400px] h-[46px] m-[0_auto] mt-[52px]">
         <button onClick={onEmailClick} className="w-[200px] h-[46px] border border-solid border-[#2824f0] rounded-[16px_16px_0px_0px] text-sm font-bold">이메일로 찾기</button>
         <button onClick={onPhoneClick} className="w-[200px] h-[46px] border border-solid border-[#2824f0] rounded-[16px_16px_0px_0px] text-sm font-bold">사업자등록번호로 찾기</button>
       </div>
      
           <div className='w-[400px] h-[46px] flex flex-col m-[0_auto] mt-[52px]'>
           <form onSubmit={handleSubmit(onValid)} >
           {method === 'email' ? 
           <>
           <span className="w-[400px] h-[46px] m-[0_auto]">가입시 등록한 이메일을 입력해주세요.</span>
            <div className='flex mb-[14px]'>
            <Input register={register('email',
                   {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "이메일 형식이 아닙니다.",
                    },
                  }
                  )} name="email" label="아이디*" type="findid_email" size="large"/>
                
            </div> 
            </>  :  null }       
            {method === 'bznum' ? 
           <>
            <div className='flex mb-[14px]'>
            <Input register={register('email',
                   {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "이메일 형식이 아닙니다.",
                    },
                  }
                  )} name="email" label="사업자등록번호*" type="findid_bznum" size="large"/>
                
            </div> 
            </>  :  null }       
                
            </form> 
           
       
           <div className='m-[0_auto] mt-[44px]'>
             <Button disable={false} text="아이디 찾기" size="xlarge"/>
           </div>
           </div>
           </>   */}
        </div>
      )
}

export default FindId