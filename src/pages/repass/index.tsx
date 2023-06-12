import { repass } from '@/apis/auth';
import Button from '@/components/button';
import Input from '@/components/input'
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form';

interface EnterForm {
  password: string;
  new_password: string;
  new_passwordConfirm: string;
}
function RePass() {
    const { register, handleSubmit, watch, reset, getValues, formState: { errors } } = useForm<EnterForm>();

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
       <div className='w-[165px] h-[24px] ml-[573px] mt-[148px] mb-[52px]'>
     <p className="text-[22px]/[100%] font-bold ">비밀번호 재설정</p>
   </div>

 <form onSubmit={handleSubmit(onValid)}>
    <div className='flex mb-[20px] ml-[calc(50%-490px/2)]'>
            <Input register={register('password',
                // {
                //     required: "Email is required",
                //     pattern: {
                //     value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                //     message: "이메일 형식이 아닙니다.",
                //     },
                // }
                )} name="repass" label="기존 비밀번호*" type="password" size="large"/>
                
    </div> 
    <div className='flex mb-[20px] ml-[calc(50%-490px/2)]'>
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
    <div className='flex ml-[calc(50%-490px/2)]'>
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
    <div className='ml-[550px] mt-[62px]'>
         <Button disable={false} text="비밀번호 변경" size="xlarge"/>
    </div>
    {errors.new_passwordConfirm?.message as string}
 </form> 
    </div>
  )
}

export default RePass