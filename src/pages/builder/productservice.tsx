import EditBuilder from '@/components/builder/LeftPanel';
import Layout from '@/components/builder/Layout';
import React, { useEffect, useState } from 'react';
import { BeforeButtonSmall } from '@/components/common/button';
import useStore from '@/store';
import { PrimaryButton } from '@/components/common/button';
import MainColor from '@/components/builder/MainColor';
import Image from 'next/image';
import { ToggleLarge } from '@/components/common/toggle';
import { ProductTitle } from '@/components/common/product';
import { BuilderInput, BuilderTextarea, BuilderUploadImage } from '@/components/common/input';
import { useForm } from 'react-hook-form';



function ProductView() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const [ add, setAdd ] = useState(false)
  const { buttondes, setButtondes, add, setAdd } = useStore();
  console.log(add)
  
  return (
  
    <div className="ml-[28px]">
    <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 제품/서비스 소개" />
    <div className="font-[700] text-[24px] mt-[16px] flex items-center">
      <img src="/product.png" alt="product" className='w-[26px] h-[26px]'/>
      <span className='ml-[8px]'>제품/서비스 소개</span>
      
      </div>
    <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
      회사가 다루는 제품 또는 서비스를 자세히 알려주세요.
    </div>
   <div className='mt-[48px]'>
      <span className='font-bold text-sm/[100%] text-[#57566a]'>사용여부</span>
      <div className="mt-[12px]">
          <ToggleLarge toggleText="사용"></ToggleLarge>
      </div>
   </div>
   <div className='mt-[48px]'>
   <span className='font-bold text-lg/[110%] text-[#57566a]'>제품 편집</span>
   </div>
   <ProductTitle onClick={() => setAdd(!add)}/>
   <div className='w-[264px] mt-[40px]'>
       <p className='font-bold text-lg/[110%] text-[#57566a]'>Call To Action</p>
       <p className='mt-[16px] font-medium text-sm/[100%] text-[#57566a]'>클릭을 유도할 수 있는 메세지를 입력해주세요.</p>
    <div className='mt-[36px] flex justify-end'>
     <ToggleLarge toggleText="사용"></ToggleLarge>
    </div>
    

    <BuilderInput title="버튼 설명" register={register('buttondes')} onChange={(e: any) => setButtondes({buttonname: e.target.value})} type="text" placeholder="예: 이 상품이 궁금하세요?" id="email" />
    <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        &#8226; 클릭을 유도할 수 있는 메시지를 입력해주세요. <br />
        &#8226; 최대 30자.
      </div>
    <BuilderInput title="버튼 텍스트" type="text" placeholder="예: 상품 보러가기" id="email" />
    <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        &#8226; 클릭을 유도할 수 있는 메시지를 입력해주세요. <br />
        &#8226; 최대 8자.
      </div>
    <BuilderInput title="버튼 링크" type="text" placeholder="예: https://zillinks.com" id="email" />
    <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        &#8226; 버튼 클릭 시, 이동하는 링크를 입력해주세요.
      </div>
      
   </div>
    {/* 저장하기 */}
    <PrimaryButton
        type="primary"
        text="저장하기"
        onClick={()=>{}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
   </div>
  
  );
}

function ProductUpload() {
 
  return (
  
    <div className="ml-[28px]">
    <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 제품/서비스 소개" />
    <div className="font-[700] text-[24px] mt-[16px] flex items-center">
      <img src="/product.png" alt="product" className='w-[26px] h-[26px]'/>
      <span className='ml-[8px]'>제품/서비스 소개</span>
      
      </div>
    <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
      제품과 서비스를 자세히 알려주세요.
    </div>

   <div className='mt-[48px]'>
   <BuilderUploadImage title="제품 서비스 이미지" ratio={1} />
      <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        340x250, png 권장, 최대 100mb
      </div>
      <div className='mt-[34px]'>
      <BuilderInput title="제품 서비스 이름" type="text" placeholder="예: 빗코" id="pageTitle" />
      <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        최대12자
      </div>
      <BuilderInput title="제품 서비스 타이틀" type="text" placeholder="예: 회사 소개 페이지 플러그인" id="pageTitle" />
      <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        최대 20자
      </div>
      <BuilderTextarea
        title="제품 서비스 설명"
        type="text"
        placeholder="예: 예: 빗코는 디지털 가상 자산에 투자하는 누구나, 쉽고 편리하게 자산관리를 안정적으로 할 수 있도록 가이드를 제시하는 모바일 어플리케이션입니다."
        id="businessNumber"
      />
      <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        &#8226; 제품/서비스에 대한 상세 설명을 작성해주세요. <br />
        &#8226; 최대 80자.
      </div>
      </div>
      
   </div>
    

   
   
   
   
    {/* 저장하기 */}
    <PrimaryButton
        type="primary"
        text="저장하기"
        onClick={() => {}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
   </div>
  
  );
}

export default function Product() {
  const { add } = useStore();
  return (
    <div>
      {add ? <Layout>{<ProductUpload />}</Layout> : <Layout>{<ProductView />}</Layout>}
      
    </div>
  );
}
