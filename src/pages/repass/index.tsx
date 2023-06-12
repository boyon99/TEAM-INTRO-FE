import Button from '@/components/button';
import Input from '@/components/input'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form';

function RePass() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  return (
    <div>
       <div className='h-[65px] border-solid border-b-[1px] border-primary-500'>
        <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className='ml-[20px] mt-[10px]'/>
       </div>
       <div className='w-[165px] h-[24px] ml-[573px] mt-[148px] mb-[52px]'>
     <p className="text-[22px]/[100%] font-bold ">비밀번호 재설정</p>
   </div>

 <div>
    <div className='flex mb-[20px] ml-[calc(50%-490px/2)]'>
            <Input register={register('email',
                {
                    required: "Email is required",
                    pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    message: "이메일 형식이 아닙니다.",
                    },
                }
                )} name="repass" label="비밀번호*" type="password" size="large"/>
                
    </div> 
    <div className='flex ml-[calc(50%-490px/2)]'>
            <Input register={register('email',
                {
                    required: "Email is required",
                    pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    message: "이메일 형식이 아닙니다.",
                    },
                }
                )} name="repass_check" label="비밀번호 확인*" type="password" size="large"/>
                
    </div> 
    <div className='ml-[550px] mt-[62px]'>
         <Button disable={false} text="비밀번호 변경" size="xlarge"/>
    </div>
 </div> 
    </div>
  )
}

export default RePass