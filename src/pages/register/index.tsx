import Button from '@/components/button';
import Input from '@/components/input'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Legister() {
  const [checked, setChecked] = useState('hello')
  const [test, setTest] = useState('hi')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   console.log(checked)
   console.log(test)
    const onClick = () => {
      setChecked('newhello')
    }
    const onClicktest = () => {
      setTest('newhi')
    }
  return (
    <div>
       <div className='h-[65px] border-solid border-b-[1px] border-primary-500'>
        <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className='ml-[20px] mt-[10px]'/>
       </div>
       <div className='w-[100px] h-[24px] m-[0_auto] mt-[50px]'>
         <p className="text-2xl/[100%] font-bold ">회원가입</p>
       </div>

       <div className='w-[501px] h-[542px] flex flex-col m-[0_auto] mt-[32px]'>
       <form id='join'>
        <div className='flex mb-[14px]'>
        <Input register={register('email',
               {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: "이메일 형식이 아닙니다.",
                },
              }
              )} name="id" label="아이디*" type="text" size="small"/>
              <Button disable={false} text="중복확인" type="button" onClick={onClick} size="xsmall"/>
        </div>
        <div className='flex mb-[14px]'>
        <Input register={register('password'       
              )} required name="bznum" label="사업자등록번호*" type="text" size="small"/>
               <Button disable={false} text="인증요청" type="button" onClick={onClicktest} size="xsmall"/>
        </div>
        <div className='flex mb-[14px]'>
        <Input register={register('password'       
              )} required name="register_password" label="비밀번호*" type="password" size="large"/>
               
        </div>
        <div className='flex mb-[14px]'>
        <Input register={register('password'       
              )} required name="register_password_check" label="비밀번호 확인*" type="password" size="large"/>
               
        </div>
        <div className='flex mb-[14px]'>
        <Input register={register('password'       
              )} required name="email" label="이메일*" type="text" size="small"/>
               <Button disable={false} text="인증요청" type="button" size="xsmall"/>
        </div>

        </form> 
        <div className='mt-[32px] pb-[14px] border-solid border-b-[1px] border-GrayScalePrimary-150'>
         <Input name="keep" type="register_checkbox"/>
       </div>
       <div className='space-y-[12px] mt-[12px]'>
         <Input name="keep" label='(필수) 이용 약관 동의' type="login_checkbox"/>
         <Input name="keep" label='(필수) 개인정보 수집 및 이용 동의' type="login_checkbox"/>
         <Input name="keep" label='(필수) 14세 이상입니다' type="login_checkbox"/>
       </div>
       <div className='m-[0_auto] mt-[32px]'>

         <Button disable={false} text="회원가입" form="join" size="xlarge"/>
       </div>
       </div>
       
    </div>
  )
}

export default Legister