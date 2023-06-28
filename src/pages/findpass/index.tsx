import { findpass } from '@/apis/auth';
import Button from '@/components/button';
import { Popup } from '@/components/common/popup';
import Input from '@/components/input'
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface EnterForm {
  email: string;
  biz_num: string;
  login_id: string;
}

function FindPass() {
  const [emailmesaage, setemailmessage] = useState('')

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<EnterForm>();
    
    const email = watch('email')
    const login_id = watch('login_id')

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
      };
    
      const closeModal = () => {
        setemailmessage('')
        setIsOpen(false);
      };

    const { mutate, isLoading,error } = useMutation(findpass, {
      onSuccess: (data) => {
       console.log(data)
       setemailmessage('메일이 발송되었습니다.')
       openModal()
      },
      onError: (err: AxiosError) => { 
        console.log(err)
        const Eresponse = err.response?.data
        const { data }: any = Eresponse
        setemailmessage(data.value)
        openModal()
      },
    })
    const onValid = (data:EnterForm) => {
     if(isLoading) return
        mutate(data)
    }
    return (
        <div>
           <div className='h-[65px] border-solid border-b-[1px] border-primary-500'>
            <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className='ml-[20px] mt-[10px]'/>
           </div>
           <div className='w-[145px] h-[24px] ml-[573px] mt-[148px] mb-[52px]'>
         <p className="text-[22px]/[100%] font-bold ">비밀번호 찾기</p>
       </div>
       <div className='w-[449px] h-[46px] m-[0_auto]'>
     <form onSubmit={handleSubmit(onValid)}>
        <div className='w-[449px] h-[46px] mb-[20px]'>
                <Input register={register('login_id')} name="findid_pass" label="아이디*" type="text" size="large" placeholder='example123'/>                   
                    
                    
        </div> 
        <div className='w-[449px] h-[46px] mb-[14px]'>
                <Input register={register('email',
                    {
                        required: "Email is required",
                        pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                        message: "이메일 형식이 아닙니다.",
                        },
                    }
                    )} name="findemail_pass" label="이메일*" type="text" size="large" placeholder='example@zilinks.com'/>
                    
        </div> 
        <div className='mt-[62px] ml-[125px]'>
           {login_id && email ? <Button disable={true} text="비밀번호 찾기" size="xlarge"/> : <Button disable={false} text="비밀번호 찾기" size="xlarge"/>}  
        </div>
     </form> 
     </div>
     <Popup text={emailmesaage} cancle='취소' confirm='확인' isOpen={isOpen} onClick={closeModal}/>
         </div>
      )
}

export default FindPass