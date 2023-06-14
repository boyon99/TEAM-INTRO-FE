import { checkid, checknum, emailcheck, emailconfirm, signup } from "@/apis/auth";
import Button from '@/components/button';
import Input from '@/components/input'
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { FieldErrors, useForm } from 'react-hook-form';

interface EnterForm {
  email: string;
  password: string;
  login_id: string;
  biz_num: string;
  code: string;
  password_confirm?: string;
}

function Legister() {
  const [checked, setChecked] = useState('hello')
  const [idmessage, setIdmessage] = useState('')
  const [iderrmessage, setIderrmessage] = useState('')
  const [nummesaage, setNummessage] = useState('')
  const [numerrmesaage, setNumerrmessage] = useState('')
  const [emailmesaage, setemailmessage] = useState('')
  const [confirmmessage, setconfirmmessage] = useState('')
  const [confirmerrmessage, setconfirmerrmessage] = useState('')
  
  const [test, setTest] = useState('hi')
    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm<EnterForm>({mode: 'onChange'});

    const { mutate, error } = useMutation(signup, {
      onSuccess: (data) => {
      
       console.log(data)
      },
      onError: (err: AxiosError) => { 
        console.log(err)
      },
    })
    const { mutate: checkidmutate, error: checkiderror } = useMutation(checkid, {
      onSuccess: (data) => {
        setIdmessage('사용 가능한 아이디입니다.')
       console.log(data)
      },
      onError: (err: AxiosError) => { 
        const Eresponse = err.response?.data
        const { data }: any = Eresponse
        setIderrmessage(data.value)
      },
    })
    const { mutate: checknummutate, error: checknumerror } = useMutation(checknum, {
      onSuccess: (data) => {
        setNummessage(data)
       console.log(data)
      },
      onError: (err: AxiosError) => { 
        const Eresponse = err.response?.data
        const { data }: any = Eresponse
        setNumerrmessage(data.value)
        console.log(data.value)
      },
    })
    const { mutate: checkemailmutate, error: checkemailerror } = useMutation(emailcheck, {
      onSuccess: (data) => {
        setemailmessage(data)
       console.log(data)
      },
      onError: (err: AxiosError) => { 
        const Eresponse = err.response?.data
        const { data }: any = Eresponse
   
        console.log(data.value)
      },
    })
    const { mutate: checkconfirmmutate, error: checkconfirmerror } = useMutation(emailconfirm, {
      onSuccess: (data) => {
        setconfirmmessage(data)
       console.log(data)
      },
      onError: (err: AxiosError) => { 
        const Eresponse = err.response?.data
        const { data }: any = Eresponse
        setconfirmerrmessage(data.value)
        console.log(data.value)
      },
    })
    // console.log(watch('login_id'))
    const login_id = watch('login_id')
    const biz_num = watch('biz_num')
    const email = watch('email')
    const code = watch('code')
    const checkidonClick = () => {
      checkidmutate({login_id})
    }
    const checknumonClick = () => {
      checknummutate({biz_num})
    }
    const checkemailonClick = () => {
      if(errors.email?.message) {
        return
      } else {

        checkemailmutate({email, dup_check: false})
      }
    }
    const checkconfirmonClick = () => {
      checkconfirmmutate({code})
    }
    const onValid = (data: EnterForm) => {
      mutate(data)
    };
   
   console.log(checked)
   console.log(errors.email?.message)
    const onClick = () => {
      setChecked('newhello')
    }
    const onClicktest = () => {
      setTest('newhi')
    }
    const allCheckClick = () => {

    }
  return (
    <div>
       <div className='h-[65px] border-solid border-b-[1px] border-primary-500'>
        <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className='ml-[20px] mt-[10px]'/>
       </div>
       <div className='w-[100px] h-[24px] m-[0_auto] mt-[30px]'>
         <p className="text-2xl/[100%] font-bold ">회원가입</p>
       </div>

       <div className='w-[501px] h-[542px] flex flex-col m-[0_auto] mt-[28px]'>
       <form id='join' onSubmit={handleSubmit(onValid)}>
        <div className='flex mb-[12px]'>
        <Input register={register('login_id'
              
              )} name="id" label="아이디*" type="text" size="small"/>
              {idmessage? <Button text="중복확인" active={true} type="button" size="xsmall"/> : login_id ? <Button disable={true} text="중복확인" type="button" onClick={checkidonClick} size="xsmall"/> :  <Button disable={false} text="중복확인" type="button" onClick={checkidonClick} size="xsmall"/>}
             
              {/* idmessage? <Button text="중복확인" active={true} type="button" onClick={checkidonClick} size="xsmall"/>  */}
        </div>
        {idmessage?  <div className="mb-[10px] text-right">

<span className="text-[13px]/[100%] font-normal text-[#4264da]">{idmessage}</span>
</div> : iderrmessage ? <div className="mb-[10px] text-right">

<span className="text-[13px]/[100%] font-normal text-[#4264da]">{iderrmessage}</span>
</div>: null}
       
        <div className='flex mb-[14px]'>
        <Input register={register('biz_num'       
              )} required name="bznum" label="사업자등록번호*" type="text" size="small"/>
              {nummesaage? <Button  text="인증확인" active={true} type="button" size="xsmall"/> : biz_num ? <Button disable={true} text="인증요청" type="button"  onClick={checknumonClick} size="xsmall"/> :  <Button disable={false} text="인증요청" type="button" onClick={checknumonClick} size="xsmall"/>}
               
        </div>
        {nummesaage? <div className="mb-[10px] text-right">

<span className="text-[13px]/[100%] font-normal text-[#4264da]">{nummesaage}</span>
</div> : numerrmesaage? <div className="mb-[10px] text-right">

<span className="text-[13px]/[100%] font-normal text-[#4264da]">{numerrmesaage}</span>
</div>:null}
        <div className='flex mb-[14px]'>
        <Input register={register('password', {
        required: '비밀번호는 필수 입력 항목입니다.',
        pattern: {
          value: /^(?=.*[A-Za-z0-9])(?=.*[@!#$%^&+=])(?!.*\s).{10,}$/,
          message: '10자 이상의 영문, 숫자, 특수문자 조합을 입력해주세요.',
        },
      }       
          )} required name="register_password" label="비밀번호*" type="password" size="large"/>
               
        </div>
        <div className="mb-[10px] text-right">

<span className="text-[13px]/[100%] font-normal text-[#4264da]">{errors.password?.message as string}</span>
</div>
        <div className='flex mb-[14px]'>
        <Input register={register('password_confirm',
        {
          required: '비밀번호 확인은 필수 입력 항목입니다.',
          validate: {
            check: (value) => {
              if (getValues('password') !== value) {
                return '비밀번호가 일치하지 않습니다.'
              }
            },
          },
        }       
              )} required name="register_password_check" label="비밀번호 확인*" type="password" size="large"/>
               
        </div>
        <div className="mb-[10px] text-right">

<span className="text-[13px]/[100%] font-normal text-[#4264da]">{errors.password_confirm?.message as string}</span>
</div>
        
        <div className='flex mb-[14px]'>
        <Input register={register('email',
         {
          required: "이메일은 필수 항목입니다.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            message: "이메일 형식이 아닙니다.",
          },
        }      
              )} required name="email" label="이메일*" type="text" size="small"/>
              {emailmesaage? <Button disable={false} text="요청완료" active={true} type="button" size="xsmall"/> :email? <Button disable={true} text="인증요청" onClick={checkemailonClick} type="button" size="xsmall"/> :  <Button disable={false} text="인증요청" type="button" onClick={checkemailonClick} size="xsmall"/> }
               
        </div>
        <div className="mb-[10px] text-right">

        <span className="text-[13px]/[100%] font-normal text-[#4264da]">{errors.email?.message}</span>
        </div>
          {emailmesaage ?  
          <div className='flex ml-[55px]'>
        <Input register={register('code'       
              )} required name="code" type="text" size="small"/>
              {confirmmessage? <Button disable={false} text="인증완료" active={true} type="button" size="xsmall"/> : code? <Button disable={true} text="확인" onClick={checkconfirmonClick} type="button" size="xsmall"/> :  <Button disable={false} text="확인" type="button" onClick={checkconfirmonClick} size="xsmall"/>}
               
        </div>: null}
        <div className="mb-[10px] text-right">

        <span className="text-[13px]/[100%] font-normal text-[#4264da]">{confirmerrmessage}</span>
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