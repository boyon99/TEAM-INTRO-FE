import Button from '@/components/button';
import Input from '@/components/input'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';

function SnsLegister() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return (
    <div>
       <div className='h-[65px] border-solid border-b-[1px] border-primary-500'>
        <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className='ml-[20px] mt-[10px]'/>
       </div>
       <div className='w-[160px] h-[24px] m-[0_auto] mt-[60px]'>
         <p className="text-2xl/[100%] font-bold ">소셜 회원가입</p>
       </div>

       <div className='w-[501px] h-[542px] flex flex-col m-[0_auto] mt-[52px]'>
       <form>
        {/* <div className='flex mb-[14px]'>
        <Input register={register('id',
               {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: "이메일 형식이 아닙니다.",
                },
              }
              )} name="id" label="아이디*" type="text" size="small"/>
              <Button disable={false} text="중복확인" size="xsmall"/>
        </div> */}
        <div className='flex mb-[14px]'>
        <Input register={register('email'       
              )} required name="snsemail" label="이메일" type="text" size="large"/>
               
        </div>
        <div className='flex mb-[14px]'>
        <Input register={register('bznum'       
              )} required name="bznum" label="사업자등록번호*" type="text" size="small"/>
               <Button disable={false} text="인증요청" size="xsmall"/>
        </div>
        

        </form> 
        <div className='mt-[32px] pb-[14px] border-solid border-b-[1px] border-GrayScalePrimary-150'>
         <Input name="keep" label='전체동의' type="register_checkbox"/>
       </div>
       <div className='space-y-[12px] mt-[12px]'>
         <Input name="keep" label='(필수) 이용 약관 동의' type="login_checkbox"/>
         <Input name="keep" label='(필수) 개인정보 수집 및 이용 동의' type="login_checkbox"/>
         <Input name="keep" label='(필수) 14세 이상입니다' type="login_checkbox"/>
       </div>
       <div className='m-[0_auto] mt-[32px]'>

         <Button disable={false} text="회원가입" size="xlarge"/>
       </div>
       </div>
       
    </div>
  )
}

export default SnsLegister