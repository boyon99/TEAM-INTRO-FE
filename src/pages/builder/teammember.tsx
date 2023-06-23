import Layout from '@/components/builder/Layout';
import { BeforeButtonSmall, PrimaryButton } from '@/components/common/button';
import { BuilderInput, BuilderTextarea } from '@/components/common/input';
import { ProductTitle } from '@/components/common/product';
import { Toggle, ToggleWidget } from '@/components/common/toggle';
import useStore from '@/store';
import { validateImageSize } from '@/utils/fileCheck';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function TeamMemberView() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { buttondes, setButtondes, add, setAdd, products, setProducts, widgets, setToggle, productservices } = useStore();
  const [toggle, setTogglebase] = useState(true)
  const TeamAddonClick = () => {
    setAdd(!add)
   
  }
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
   <ProductTitle TeamAddonClick={TeamAddonClick}/> 
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
    
      const { register, handleSubmit, watch, formState: { errors } } = useForm();
      const { products, setProducts, imgurl, setImgurl, add, setAdd  } = useStore();
    
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
    <form id='product'>
       <div className='mt-[48px]'>
        <span className='mt-[20px] text-GrayScalePrimary-700 font-bold text-[18px]/110%'>팀 멤버 추가하기</span>
          <div className="mt-[24px] font-[700] text-[14px] text-GrayScalePrimary-700">프로필 이미지</div>
          <div
        className={
          'w-[264px] h-[138px] rounded-[6px] border-[2px] border-GrayScalePrimary-300 mt-[8px] indent-[10px] flex flex-col'
        }
      >
        {/* 이미지 업로드 시 업로드한 이미지 미리보기 */}
        
          <div className="relative overflow-hidden">
            <div>
              <img src='' className="m-[auto] object-contain max-w-[264px] max-h-[138px]" alt="logo-img" />
            </div>
            <button
              className="w-[32px] h-[32px] absolute right-[8px] top-[7px]"
            //   onClick={deleteonClick}
            >
              <img src="/delete.png" />
            </button>
          </div>
        
        {/* 이미지 업로드 버튼 */}
        {/* 이미지가 존재하지 않는 경우, 이미지 업로드 버튼이 보이고, 이미지가 존재하는 경우 사라짐 */}
        
          <>
            <div className="w-[60px] h-[60px] rounded-[10px] bg-primary-100 mx-[auto] mt-[14px]">
              <input className="hidden" type="file" id='file-input'{...register('image', {
                onChange: (e) => {
                  validateImageSize({e,  setImgurl})
                }
              })}      
              />
              <label className="file-input__label" htmlFor="file-input">
                <img src="/union.png" className="w-[20px] h-[20px] m-[auto] mt-[20px]" />
              </label>
            </div>
            <span className="font-[500] text-[14px] text-GrayScalePrimary-700 mt-[8px] ml-[55px]">
              이미지를 추가해주세요.
            </span>
            <span className="font-[500] text-[14px] text-GrayScalePrimary-400 ml-[80px]">최대 100mb</span>
          </>
       
      </div>
         
             
             
    
          <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            238x280, png 권장, 최대 100mb
          </div>
          <div className='mt-[34px]'>
          <BuilderInput register={register('name')} title="성명" type="text" placeholder="예: 성이름" id="pageTitle" onChange={(e) => {
      const updatedProducts = products.map((product, index) => {
        if (index === products.length - 1) {
          return {
            ...product,
            name: e.target.value
          };
        }
        return product;
      });
    
      setProducts(updatedProducts);
    }}/>
    <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            최대20자
          </div>
          
          <BuilderInput register={register('name')} title="소속" type="text" placeholder="예: 소속/팀" id="pageTitle" onChange={(e) => {
      const updatedProducts = products.map((product, index) => {
        if (index === products.length - 1) {
          return {
            ...product,
            name: e.target.value
          };
        }
        return product;
      });
    
      setProducts(updatedProducts);
    }}/>
    <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            최대20자
          </div>
          
          <BuilderInput register={register('name')} title="직책" type="text" placeholder="예: Web Developer" id="pageTitle" onChange={(e) => {
      const updatedProducts = products.map((product, index) => {
        if (index === products.length - 1) {
          return {
            ...product,
            name: e.target.value
          };
        }
        return product;
      });
    
      setProducts(updatedProducts);
    }}/>
          <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            최대20자
          </div>
          
         
          <BuilderTextarea
            register={register('description')}
            title="한줄 소개"
            type="text"
            placeholder="예: 스타트업 전문 패스트빌더입니다."
            id="businessNumber"
            onChange={(e) => {
              const updatedProducts = products.map((product, index) => {
                if (index === products.length - 1) {
                  return {
                    ...product,
                    description: e.target.value
                  };
                }
                return product;
              });
            
              setProducts(updatedProducts);
            }}
          />
          <BuilderInput register={register('name')} title="이메일" type="text" placeholder="예: contact@zillinks.com" id="pageTitle" onChange={(e) => {
      const updatedProducts = products.map((product, index) => {
        if (index === products.length - 1) {
          return {
            ...product,
            name: e.target.value
          };
        }
        return product;
      });
    
      setProducts(updatedProducts);
    }}/>
          </div>
          
       </div>
       </form>
    
        {/* 저장하기 */}
        <PrimaryButton
            type="primary"
            text="저장하기"
            form='product'
            onClicka={() => {}}
            classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
          />
          
       </div>
      
      );
}



export default function TeamMember() {
    const { add } = useStore();
    return (
      <div>
        {add ? <Layout>{<TeamMemberAdd />}</Layout> : <Layout>{<TeamMemberView />}</Layout>}
        
      </div>
    );
  }