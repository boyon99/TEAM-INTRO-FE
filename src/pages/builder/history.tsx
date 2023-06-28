import { historyadd, historydelete } from '@/apis/auth';
import Layout from '@/components/builder/Layout';
import { BeforeButtonSmall, PrimaryButton } from '@/components/common/button';
import { BuilderInput, BuilderTextarea } from '@/components/common/input';
import { HistoryTitle, ProductTitle } from '@/components/common/product';
import { Toggle, ToggleWidget } from '@/components/common/toggle';
import { HistoryDelete } from '@/interfaces/auth';
import useStore from '@/store';
import { getCookie } from '@/utils/cookies';
import { validateImageSize } from '@/utils/fileCheck';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function HistoryView() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { historyadd, setHistoryAdd, historys, setHistorys, widgets, setToggle } = useStore();
  const findWigetToggle = widgets.find((widget) => widget.widget_id === 9);
  console.log(findWigetToggle?.toggle)
  // 추가하기 버튼 클릭시 빈상자(빈배열)가 생김
  const HistoryAddonClick = () => {
    setHistoryAdd(!historyadd);
    setHistorys([
      ...historys,
      {
        history_element_id: historys.length + 1,
        order: historys.length + 1,
        date: '',
        title: '',
        description: '',
        image: '',
      },
    ]);
  };
  //  배열 리스트 삭제/위치 이동시 체크박스 그대로 유지
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  console.log(selectedItems);

  // 제품/서비스 삭제 요청api
  const { mutate: deletemutate } = useMutation(historydelete, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err: AxiosError) => {
      const Eresponse = err.response?.data;
      const { data }: any = Eresponse;
      console.log(data.value);
    },
  });
  const handleCheckboxChange = (productId: any) => {
    if (selectedItems.includes(productId)) {
      setSelectedItems(selectedItems.filter((id: any) => id !== productId));
    } else {
      setSelectedItems([...selectedItems, productId]);
    }
  };
  // 삭제 요청과의 별개로 저장되어있던 미리보기 ui 삭제
  const deleteSelectedItems = () => {
    const updatedProducts = historys.filter((product) => !selectedItems.includes(product.history_element_id));
    const filteredArray: HistoryDelete = {
      delete_list: selectedItems.filter((item) => item !== undefined) as number[],
    };
    console.log(filteredArray);
    deletemutate(filteredArray);
    setHistorys(updatedProducts);
    setSelectedItems([]);
  };
  return (
    <div className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 연혁" />
      <div className="font-[700] text-[24px] mt-[16px] flex items-center">
        <img src="/chart-gantt.png" alt="product" className="w-[26px] h-[26px]" />
        <span className="ml-[8px]">연혁</span>
      </div>
    <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
    우리 회사가 진행해 온 프로젝트들을 연월에 따라 정렬해주세요.
    </div>
   <div className='mt-[48px]'>
      <span className='font-bold text-sm/[100%] text-[#57566a]'>사용여부</span>
      <div className="mt-[12px]">
      <ToggleWidget
        toggle={findWigetToggle?.toggle as boolean}
        setWidgetToggle={setToggle}
        widgetId={9}
        toggleText={{ true: '사용', false: '사용 안함' }}
      />
      </div>
   </div>
   {findWigetToggle?.toggle ? 
   <>
   <div className='mt-[48px]'>
   <span className='font-bold text-lg/[110%] text-[#57566a]'>연혁 편집</span>
   </div>
   <HistoryTitle HistoryAddonClick={HistoryAddonClick} deleteSelectedItems={deleteSelectedItems} handleCheckboxChange={handleCheckboxChange} selectedItems={selectedItems} setSelectedItems={setSelectedItems} /> 
   </>: <></>}
   
    {/* 저장하기 */}
    <PrimaryButton
        form='view'
        type="primary"
        text="저장하기"
        onClick={() => {}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </div>
  );
}

function HistoryAdd() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { historys, setHistorys, historyimgurl, setHistoryImgurl, setHistoryAdd } = useStore();
  const [historyview, setHistoryView] = useState('');

  useEffect(() => {
    const updatedProducts = historys.map((product, index) => {
      if (index === historys.length - 1) {
        return {
          ...product,
          image: historyview,
        };
      }
      return product;
    });

    setHistorys(updatedProducts);
  }, [historyview]);

  // 제품/서비스 추가하기 api 요청
  const {
    mutate: historymutate,
    isLoading: userLoading,
    error: usererror,
  } = useMutation(historyadd, {
    onSuccess: (data) => {
      console.log(data);
      //저장하기가 성공하면 결과값의 데이터를 원래 products에 저장, 여기서 사용자가 넣은 이미지 결과를 바로 볼 수 있음

      setHistoryAdd(false); // 저장하기가 성공하면 뒤로가기
    },
    onError: (err: AxiosError) => {
      const Eresponse = err.response?.data;
      const { data }: any = Eresponse;
      console.log(data.value);
    },
  });

  // 이미지를 포함하여 요청을 보낼 경우 이미지 경로를 미리 받아와서 요청 보내기
  const token = getCookie('access_token');
  const onValid = async (data: any) => {
    const image = watch('image');
    console.log(data);
    const form = new FormData();
    form.append('image', data.image[0]);
    form.append('name', `${image}`);
    form.append('type', 'string');
    try {
      const response = await axios.post('/api/s/user/uploadImage', form, {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      const avatar = response.data.data.upload_path;
      console.log(avatar);
      const user = {
        date: data.date,
        title: data.title,
        description: data.description,
        image: avatar,
      };

      historymutate(user);
    } catch (error) {
      console.log(error);
    }
  };

  // 이미지의 삭제 버튼 클릭시 미리보기 이미지 삭제
  const deleteonClick = () => {
    setHistoryView('');
    setHistoryImgurl('');
  };

  return (
    <div className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 연혁" />
      <div className="font-[700] text-[24px] mt-[16px] flex items-center">
        <img src="/chart-gantt.png" alt="product" className="w-[26px] h-[26px]" />
        <span className="ml-[8px]">연혁</span>
      </div>
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        우리 회사가 진행해 온 프로젝트들을 연월에 따라 정렬해주세요.
      </div>
      <form id="history" onSubmit={handleSubmit(onValid)}>
        <div className="mt-[48px]">
          <span className="mt-[20px] text-GrayScalePrimary-700 font-bold text-[18px]/110%">연혁 추가하기</span>
          <div className="mt-[24px] font-[700] text-[14px] text-GrayScalePrimary-700">연혁 이미지</div>
          <div
            className={
              'w-[264px] h-[138px] rounded-[6px] border-[2px] border-GrayScalePrimary-300 mt-[8px] indent-[10px] flex flex-col'
            }
          >
            {/* 이미지 업로드 시 업로드한 이미지 미리보기 */}

            {historyview === '' ? null : (
              <div className="relative overflow-hidden">
                <div>
                  <img
                    src={historyview}
                    className="m-[auto] object-contain max-w-[264px] max-h-[138px]"
                    alt="logo-img"
                  />
                </div>
                <button className="w-[32px] h-[32px] absolute right-[8px] top-[7px]" onClick={deleteonClick}>
                  <img src="/delete.png" />
                </button>
              </div>
            )}

            {/* 이미지 업로드 버튼 */}
            {/* 이미지가 존재하지 않는 경우, 이미지 업로드 버튼이 보이고, 이미지가 존재하는 경우 사라짐 */}

            {historyview === '' ? (
              <>
                <div className="w-[60px] h-[60px] rounded-[10px] bg-primary-100 mx-[auto] mt-[14px]">
                  <input
                    className="hidden"
                    type="file"
                    id="file-input"
                    {...register('image', {
                      onChange: (e) => {
                        validateImageSize({ e, setHistoryView, setHistoryImgurl });
                      },
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
          </div>

          <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            500x330, png 권장, 최대 100mb
          </div>
          <div className='mt-[34px]'>
          <BuilderInput register={register('date')} title="날짜" type="text" placeholder="예: 2023-07-07" id="pageTitle" onChange={(e) => {
      const updatedProducts = historys.map((product, index) => {
        if (index === historys.length - 1) {
          return {
            ...product,
            date: e.target.value
          };
        }
        return product;
      });
    
      setHistorys(updatedProducts);
    }}/>
    <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            최대20자
          </div>
          <BuilderInput register={register('title')} title="연혁" type="text" placeholder="예: 패스트캠퍼스 기업협력 프로젝트 MOU 진행" id="pageTitle" onChange={(e) => {
      const updatedProducts = historys.map((product, index) => {
        if (index === historys.length - 1) {
          return {
            ...product,
            title: e.target.value
          };
        }
        return product;
      });
    
      setHistorys(updatedProducts);
    }}/>
    <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            최대30자
          </div>
          
          <BuilderTextarea
            register={register('description')}
            title="연혁 설명"
            type="text"
            placeholder="예: 패스트캠퍼스와 함께 진행한 MOU프로젝트, 전체 고객 수 30프로 이상 증가하는 프로젝트로 다양한 파트너사에 긍정적 피드백 받음"
            id="businessNumber"
            onChange={(e) => {
              const updatedProducts = historys.map((product, index) => {
                if (index === historys.length - 1) {
                  return {
                    ...product,
                    description: e.target.value
                  };
                }
                return product;
              });
            
              setHistorys(updatedProducts);
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
        form="history"
        onClicka={() => {}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </div>
  );
}

export default function History() {
  const { historyadd } = useStore();
  return <div>{historyadd ? <Layout>{<HistoryAdd />}</Layout> : <Layout>{<HistoryView />}</Layout>}</div>;
}
