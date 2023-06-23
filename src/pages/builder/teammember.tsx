import Layout from '@/components/builder/Layout';
import { BeforeButtonSmall, PrimaryButton } from '@/components/common/button';
import { BuilderInput } from '@/components/common/input';
import { ProductTitle } from '@/components/common/product';
import { Toggle, ToggleWidget } from '@/components/common/toggle';
import useStore from '@/store';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function TeamMemberView() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { buttondes, setButtondes, add, setAdd, products, setProducts, widgets, setToggle, productservices } = useStore();
  const [toggle, setTogglebase] = useState(true)
  
  return (
  
    <div className="ml-[28px]">
    <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 팀 멤버" />
    <div className="font-[700] text-[24px] mt-[16px] flex items-center">
      <img src="/팀 멤버.png" alt="product" className='w-[26px] h-[26px]'/>
      <span className='ml-[8px]'>팀 멤버</span>
      
      </div>
    <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
    팀 멤버들의 아이덴티티, 역량과 발전 가능성과 성과 등을 회사에서 맡은 역할과 연결해 표현해주세요.
    </div>
   <div className='mt-[48px]'>
      <span className='font-bold text-sm/[100%] text-[#57566a]'>사용여부</span>
      <div className="mt-[12px]">
      <ToggleWidget
        toggle={widgets[3].toggle}
        setWidgetToggle={setToggle}
        widgetName="팀 멤버"
        toggleText={{ true: '사용', false: '사용 안함' }}
      />
      </div>
   </div>
   {widgets[3].toggle ? 
   <>
   <div className='mt-[48px]'>
   <span className='font-bold text-lg/[110%] text-[#57566a]'>제품 편집</span>
   </div>
   <ProductTitle/> 
   </>: <></>}
   
    {/* 저장하기 */}
    <PrimaryButton
        form='view'
        type="primary"
        text="저장하기"
        onClick={()=>{}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
   </div>
  
  );
}


function TeamMemberAdd() {
  return (
    <div>teammember</div>
  )
}



export default function TeamMember() {
    const { add } = useStore();
    return (
      <div>
        {add ? <Layout>{<TeamMemberAdd />}</Layout> : <Layout>{<TeamMemberView />}</Layout>}
        
      </div>
    );
  }