import { repass } from '@/apis/auth';
import Button from '@/components/button';
import Input from '@/components/input'
import { cls } from '@/utiles/utile';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface EnterForm {
  password: string;
  new_password: string;
  new_passwordConfirm: string;
}
function RePass() {
  const [method, setMethod] = useState<"info" | "pass">("info");
    const { register, handleSubmit, watch, reset, getValues, formState: { errors } } = useForm<EnterForm>();

    const oninfoClick = () => {
      reset();
      setMethod("info");
    }
    const onpassClick = () => {
      reset();
      setMethod("pass");
    }

    const { mutate, error } = useMutation(repass, {
      onSuccess: (data) => {
       console.log(data)
       alert('비밀번호가 변경되었습니다')
      },
      onError: (err: AxiosError) => { 
        console.log(err)
      },
    })
    const onValid = (data:EnterForm) => {
     const user = {
      password: data.password,
      new_password: data.new_password
     }
        mutate(user)
    }
  return (
    <div>
     
        <div className='h-[65px] border-solid border-b-[1px] border-primary-500'>
          <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className='ml-[20px] mt-[10px]'/>
        </div>
        <div className='flex'>
          <div className='w-[296px] h-[100vh] border-solid border-r-[1px] border-[#c1c0cc]'>
             <div className='w-[146px] h-[30px] ml-[75px] mt-[24px] flex'>
               <Image src="/account_circle.png" alt="account_circle" width={30} height={30} className='mr-[10px]'/>
               <span className='text-xl/[140%] font-bold'>마이페이지</span>
             </div>
             <div className='w-[240px] h-[102px] mt-[32px] ml-[28px] flex flex-col'>
              <div className={cls('h-[48px] flex items-center', method === 'info' ? 'bg-[#f6f6fd] border-r-[4px] border-solid border-[#4b48df]' : '')}>

               <button onClick={oninfoClick} className={cls('font-medium text-base/[100%] ml-[148px]', method === 'info' ? 'text-[#000]' : 'text-[#a5a4b5]')}>기본 정보</button>
              </div>
              <div className={cls('h-[48px] flex items-center', method === 'pass' ? 'bg-[#f6f6fd] border-r-[4px] border-solid border-[#4b48df]' : '')}>

               <button onClick={onpassClick} className={cls('font-medium text-base/[100%] ml-[101px]', method === 'pass' ? 'text-[#000]' : 'text-[#a5a4b5]')}>비밀번호 재설정</button>
              </div>
             </div>
            </div>
       
        
      <div className='w-[984px] bg-[#F8F8FA]'>
       <div className='w-[900px] h-[70px] border border-solid border-[#eaeaee] bg-[#fff] rounded-xl ml-[38px] mt-[24px]'>
     <p className="text-[22px]/[100%] font-bold ml-[calc(50%-139px/2-0.5px)] mt-[24px]">비밀번호 재설정</p>
   </div>

 <form onSubmit={handleSubmit(onValid)} className='w-[900px] h-[620px] border border-solid border-[#eaeaee] bg-[#fff] rounded-xl mt-[18px] ml-[38px]'>
    <div className='h-[70px] flex mb-[20px] ml-[calc(50%-500px/2-11px)] mt-[104px]'>
            <Input register={register('password',
                // {
                //     required: "Email is required",
                //     pattern: {
                //     value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                //     message: "이메일 형식이 아닙니다.",
                //     },
                // }
                )} name="old_repass" label="기존 비밀번호*" type="password" size="large"/>
                
    </div> 
    <div className='flex mb-[20px] ml-[calc(50%-500px/2-11px)] mt-[38px]'>
            <Input register={register('new_password',
                {
                    required: "Email is required",
                    // pattern: {
                    // value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    // message: "이메일 형식이 아닙니다.",
                    // },
                }
                )} name="repass" label="새 비밀번호*" type="password" size="large"/>
                
    </div> 
    <div className='h-[66px] flex ml-[calc(50%-500px/2-11px)]'>
            <Input register={register('new_passwordConfirm', {
                        required: '비밀번호 확인은 필수 입력 항목입니다.',
                        validate: {
                          check: (value) => {
                            if (getValues('new_password') !== value) {
                              return '비밀번호가 일치하지 않습니다.'
                            }
                          },
                        },
                      }
              
                )} name="repass_check" label="새 비밀번호 확인*" type="password" size="large"/>
                
    </div> 
    <div className='ml-[359px] mt-[62px]'>
         <Button disable={false} text="비밀번호 변경" size="xlarge"/>
    </div>
    {errors.new_passwordConfirm?.message as string}
 </form> 
 </div>
 </div>
    </div>
  )
}

export default RePass