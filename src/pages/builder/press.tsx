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

function PressView() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {newsadd, setNewsAdd,news,setNews, widgets, setToggle } = useStore();
  const [toggle, setTogglebase] = useState(true)
  const NewsAddonClick = () => {
    setNewsAdd(!newsadd)
    setNews([...news,
      {
        news_element_id: news.length + 1,
        order: news.length + 1,
        date: '',
        press: '',
        title: '',
        description: '',
        image: '',
      }
      ])
  }
  return (
  
    <div className="ml-[28px]">
    <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 보도 자료" />
    <div className="font-[700] text-[24px] mt-[16px] flex items-center">
      <img src="/newspaper-variant-multiple-outline.png" alt="product" className='w-[26px] h-[26px]'/>
      <span className='ml-[8px]'>보도 자료</span>
      
      </div>
    <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
    미디어에서 우리 회사를 있는 그대로 보여주세요.
    </div>
   <div className='mt-[48px]'>
      <span className='font-bold text-sm/[100%] text-[#57566a]'>사용여부</span>
      <div className="mt-[12px]">
      <ToggleWidget
        toggle={widgets[5].toggle}
        setWidgetToggle={setToggle}
        widgetName="보도자료"
        toggleText={{ true: '사용', false: '사용 안함' }}
      />
      </div>
   </div>
   {widgets[5].toggle ? 
   <>
   <div className='mt-[48px]'>
   <span className='font-bold text-lg/[110%] text-[#57566a]'>보도 자료 편집</span>
   </div>
   <ProductTitle NewsAddonClick={NewsAddonClick}/> 
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


function PressAdd() {
    
      const { register, handleSubmit, watch, formState: { errors } } = useForm();
      const { news, setNews, newsimgurl, setNewsImgurl  } = useStore();
      const [newsview, setNewsView] = useState('');
     // 이미지의 삭제 버튼 클릭시 미리보기 이미지 삭제
     const deleteonClick = () => {
      setNewsView('');
      setNewsImgurl('');
    }
      return (
      
        <div className="ml-[28px]">
        <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 보도 자료" />
        <div className="font-[700] text-[24px] mt-[16px] flex items-center">
          <img src="/newspaper-variant-multiple-outline.png" alt="product" className='w-[26px] h-[26px]'/>
          <span className='ml-[8px]'>보도 자료</span>
          
          </div>
        <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        미디어에서 우리 회사를 있는 그대로 보여주세요.
        </div>
    <form id='product'>
       <div className='mt-[48px]'>
       <span className='mt-[20px] text-GrayScalePrimary-700 font-bold text-[18px]/110%'>보도자료 불러오기</span>
          <BuilderInput register={register('name')} title="링크 주소" type="text" placeholder="전체 URL을 입력해주세요" id="pageTitle" onChange={(e) => {
      const updatedProducts = news.map((item, index) => {
        if (index === news.length - 1) {
          return {
            ...item,
            name: e.target.value
          };
        }
        return item;
      });
    
      setNews(updatedProducts);
    }}/>
     {/* 저장하기 */}
     <PrimaryButton
            type="primary"
            text="저장하기"
            form='product'
            onClicka={() => {}}
            classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700] mb-[48px]"
          />
          <div className='w-[264px] h-[30px] flex items-center mb-[40px]'>
          <img src="/Line.png" alt="product" className='w-[113px]'/>
          <span className='text-[14px]/[110%] font-bold text-[#A5A4B5] m-[0_4px]'>AND</span>
          <img src="/Line.png" alt="product" className='w-[113px]'/>
          </div>
          <span className='mt-[30px] text-GrayScalePrimary-700 font-bold text-[18px]/110%'>보도자료 추가</span>
          <div className="mt-[24px] font-[700] text-[14px] text-GrayScalePrimary-700">보도자료 이미지</div>
          <div
        className={
          'w-[264px] h-[138px] rounded-[6px] border-[2px] border-GrayScalePrimary-300 mt-[10px] indent-[10px] flex flex-col'
        }
      >
        {/* 이미지 업로드 시 업로드한 이미지 미리보기 */}
        
        {newsview === '' ? null : (
          <div className="relative overflow-hidden">
            <div>
              <img src={newsview} className="m-[auto] object-contain max-w-[264px] max-h-[138px]" alt="logo-img" />
            </div>
            <button
              className="w-[32px] h-[32px] absolute right-[8px] top-[7px]"
              onClick={deleteonClick}
            >
              <img src="/delete.png" />
            </button>
          </div>
        )}
        
        {/* 이미지 업로드 버튼 */}
        {/* 이미지가 존재하지 않는 경우, 이미지 업로드 버튼이 보이고, 이미지가 존재하는 경우 사라짐 */}
        
          <>
          {newsview === '' ? (
          <>
            <div className="w-[60px] h-[60px] rounded-[10px] bg-primary-100 mx-[auto] mt-[14px]">
              <input className="hidden" type="file" id='file-input'{...register('image', {
                onChange: (e) => {
                  validateImageSize({e, setNewsView, setNewsImgurl})
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
        ) : null}
          </>
       
      </div>
         
             
             
    
          <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            500x330, png 권장, 최대 100mb
          </div>
          <div className='mt-[34px]'>
          <BuilderInput register={register('date')} title="보도날짜" type="text" placeholder="예: 2023-06-07" id="pageTitle" onChange={(e) => {
      const updatedProducts = news.map((item, index) => {
        if (index === news.length - 1) {
          return {
            ...item,
            date: e.target.value
          };
        }
        return item;
      });
    
      setNews(updatedProducts);
    }}/>
    <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            최대20자
          </div>
          <BuilderInput register={register('press')} title="보도매체" type="text" placeholder="예: 중앙일보" id="pageTitle" onChange={(e) => {
      const updatedProducts = news.map((item, index) => {
        if (index === news.length - 1) {
          return {
            ...item,
            press: e.target.value
          };
        }
        return item;
      });
    
      setNews(updatedProducts);
    }}/>
    <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            최대20자
          </div>
          <BuilderInput register={register('title')} title="기사 제목" type="text" placeholder="예: 기사제목" id="pageTitle" onChange={(e) => {
      const updatedProducts = news.map((item, index) => {
        if (index === news.length - 1) {
          return {
            ...item,
            title: e.target.value
          };
        }
        return item;
      });
    
      setNews(updatedProducts);
    }}/>
    <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            최대20자
          </div>
          
          <BuilderTextarea
            register={register('description')}
            title="기사 설명"
            type="text"
            placeholder="예: ##년도 ## 컨퍼런스"
            id="businessNumber"
            onChange={(e) => {
              const updatedProducts = news.map((item, index) => {
                if (index === news.length - 1) {
                  return {
                    ...item,
                    description: e.target.value
                  };
                }
                return item;
              });
            
              setNews(updatedProducts);
            }}
          />
          </div>
          <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            우리 회사에만 있는 특색 있는 문화를 설명해주세요.
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



export default function Press() {
    const { newsadd } = useStore();
    return (
      <div>
        {newsadd? <Layout>{<PressAdd />}</Layout> : <Layout>{<PressView />}</Layout>}
        
      </div>
    );
  }