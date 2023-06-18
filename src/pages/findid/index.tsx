import { findidbybznum, findidbyemail } from "@/apis/auth";
import Button from "@/components/button"
import Input from "@/components/input"
import { cls } from "@/utils/utile";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface EnterForm {
    email: string;
    biz_num: string;
  }


function FindId() {
  const [data, setData] = useState<any>()
  const [bzdata, setBzdata] = useState<any>()
  const [method, setMethod] = useState<"email" | "biz_num">("email");
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<EnterForm>();
    const { mutate, error } = useMutation(findidbyemail, {
        onSuccess: (data) => {
         
          setData(data)
        },
        onError: (err: AxiosError) => { 
          console.log(err)
        },
      })
    const { mutate:bzmutate } = useMutation(findidbybznum, {
        onSuccess: (data) => {
         
          setBzdata(data)
        },
        onError: (err: AxiosError) => { 
          console.log(err)
        },
      })
     
      console.log(watch('biz_num'))
   

    const onEmailClick = () => {
        reset();
        setMethod("email");
      }
      const onbizNumClick = () => {
        reset();
        setMethod("biz_num");
      }
    
      const onValid = (data:EnterForm) => {
        if(method === "email") {
          mutate(data)
        } else {

          bzmutate(data)
        }
        
      };
    
    return (
        <div>
           <div className='h-[65px] border-solid border-b-[1px] border-primary-500'>
            <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className='ml-[20px] mt-[10px]'/>
           </div>
           <div className='w-[120px] h-[24px] m-[0_auto] mt-[148px] mb-[52px]'>
         <p className="text-[22px]/[100%] font-bold ">아이디 찾기</p>
       </div>

     {data || bzdata? 
       <div>
        <span className="w-[252px] h-[16px] text-sm/[100%] ml-[441px]">고객님의 정보와 일치하는 아이디입니다.</span>
        <div className="relative w-[400px] h-[100px] ml-[calc(50%-400px/2)] mt-[24px] border border-solid border-[#cfced7] rounded-lg mb-[48px]">
         <span className="absolute text-2xl/[100%] font-bold text-[#403f4e] mt-[32px] ml-[145px]">{data?.login_id}{bzdata?.login_id}</span>
        </div>
        <div className="w-[376px] h-[46px] ml-[calc(50%-376px/2)] space-x-[16px]">
           <Link href={'/login'}>
            <Button disable={false} text="로그인 하기" size="xlarge"/>
            </Link>
            <Link href={'/findpass'}>
            <Button disable={false} text="비밀번호 찾기" size="xlarge"/>
            </Link>
        </div>
     </div> : 
     
       <>
       <div className="w-[400px] h-[46px] m-[0_auto] mt-[52px]">
         <button onClick={onEmailClick} className={cls("w-[200px] h-[46px] border border-solid rounded-[16px_16px_0px_0px] text-sm font-bold", method === "email" ? "border-[#2824f0]" : "border-[#cfced7] text-[#89889e]")}>이메일로 찾기</button>
         <button onClick={onbizNumClick} className={cls("w-[200px] h-[46px] border border-solid rounded-[16px_16px_0px_0px] text-sm font-bold", method === "biz_num" ? "border-[#2824f0]" : "border-[#cfced7] text-[#89889e]")}>사업자등록번호로 찾기</button>
       </div>
      
           <div className='w-[400px] h-[46px] flex flex-col m-[0_auto] mt-[52px]'>
           <form onSubmit={handleSubmit(onValid)} id="findid_email">
           {method === 'email' ? 
           <>
           <span className="w-[400px] h-[46px] text-[#403F4E]">가입시 등록한 이메일을 입력해주세요.</span>
            <div className='mb-[14px] mt-4'>
            <Input register={register('email',
                   {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "이메일 형식이 아닙니다.",
                    },
                  }
                  )} name="findid_email" label="이메일*" type="text" size="large"/>
                
            </div> 
            </>  :  null }       
            {method === 'biz_num' ? 
           <>
            <div className='mb-[14px]'>
            <Input register={register('biz_num',
                   {
                    required: "Email is required",
                    // pattern: {
                    //   value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    //   message: "이메일 형식이 아닙니다.",
                    // },
                  }
                  )} name="findbznum_email" label="사업자등록번호*" type="text" size="large"/>
                
            </div> 
            </>  :  null }       
            </form> 
            <div className='m-[0_auto] mt-[44px]'>
             <Button disable={false} text="아이디 찾기" size="xlarge" form="findid_email"/>
           </div>
           
       
           
           </div>
           </> }
        </div>
      )
}

export default FindId