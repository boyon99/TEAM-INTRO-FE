import Layout from '@/components/builder/Layout';
import React, { useEffect, useState } from 'react';
import { BeforeButtonSmall } from '@/components/common/button';
import useStore from '@/store';
import { PrimaryButton } from '@/components/common/button';
import { Toggle, ToggleLarge, ToggleWidget } from '@/components/common/toggle';
import { ProductTitle } from '@/components/common/product';
import { BuilderInput, BuilderTextarea, BuilderUploadImage } from '@/components/common/input';
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import { getCookie } from '@/utils/cookies';
import { useMutation } from '@tanstack/react-query';
import { productadd, productdelete, productview } from '@/apis/auth';
import { useRouter } from 'next/router';
import { Popup } from '@/components/common/popup';
import { validateImageSize } from '@/utils/fileCheck';
import { ProductDelete } from '@/interfaces/auth';

interface ProductModify {
  description: string;
  text: string;
  link: string;
}

function ProductView() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProductModify>();
  const { buttondes, setButtondes, add, setAdd, products, setProducts, widgets, setToggle, productservices } =
    useStore();
  const [toggle, setTogglebase] = useState(true);
  // 추가하기 버튼 클릭시 빈상자(빈배열)가 생김
  const onClick = () => {
    setAdd(!add);
    setProducts([
      ...products,
      {
        products_and_services_element_id: products.length + 1,
        order: products.length + 1,
        name: '',
        title: '',
        description: '',
        image: '',
      },
    ]);
  };
  //제품/서비스 메인페이지 저장하기 api요청
  const {
    mutate: viewmutate,
    isLoading: userLoading,
    error: usererror,
  } = useMutation(productview, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err: AxiosError) => {
      const Eresponse = err.response?.data;
      const { data }: any = Eresponse;
      console.log(data.value);
    },
  });
  const onValidView = async (data: any) => {
    const viewdata = {
      widget_status: widgets[2].toggle,
      order_list: products.map((e) => e.order),
      call_to_action_status: toggle,
      description: data.description,
      text: data.text,
      link: data.link,
    };
    viewmutate(viewdata);
  };
  //  배열 리스트 삭제/위치 이동시 체크박스 그대로 유지
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  console.log(selectedItems);

  // 제품/서비스 삭제 요청api
  const { mutate: deletemutate } = useMutation(productdelete, {
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
    const updatedProducts = products.filter(
      (product) => !selectedItems.includes(product.products_and_services_element_id),
    );
    const filteredArray: ProductDelete = {
      delete_list: selectedItems.filter((item) => item !== undefined) as number[],
    };
    console.log(filteredArray);
    deletemutate(filteredArray);
    setProducts(updatedProducts);
    setSelectedItems([]);
  };
  // const filteredArray: ProductDelete = {
  //   delete_list:selectedItems.filter((item) => item !== undefined) as number[]
  // }
  // ;
  // console.log(filteredArray.delete_list)
  return (
    <div className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 제품/서비스 소개" />
      <div className="font-[700] text-[24px] mt-[16px] flex items-center">
        <img src="/product.png" alt="product" className="w-[26px] h-[26px]" />
        <span className="ml-[8px]">제품/서비스 소개</span>
      </div>
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        회사가 다루는 제품 또는 서비스를 자세히 알려주세요.
      </div>
      <div className="mt-[48px]">
        <span className="font-bold text-sm/[100%] text-[#57566a]">사용여부</span>
        <div className="mt-[12px]">
          <ToggleWidget
            toggle={widgets[2].toggle}
            setWidgetToggle={setToggle}
            widgetId={2}
            toggleText={{ true: '사용', false: '사용 안함' }}
          />
        </div>
      </div>
      {widgets[2].toggle ? (
        <>
          <div className="mt-[48px]">
            <span className="font-bold text-lg/[110%] text-[#57566a]">제품 편집</span>
          </div>
          <ProductTitle
            onClick={onClick}
            deleteSelectedClick={deleteSelectedItems}
            handleCheckboxChange={handleCheckboxChange}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </>
      ) : (
        <></>
      )}
      <div className="w-[264px] mt-[40px]">
        <p className="font-bold text-lg/[110%] text-[#57566a]">Call To Action</p>
        <p className="mt-[16px] font-medium text-sm/[100%] text-[#57566a]">
          클릭을 유도할 수 있는 메세지를 입력해주세요.
        </p>
        <div className="mt-[36px] flex justify-end">
          <Toggle toggle={toggle} setToggle={setTogglebase} toggleText={{ true: '사용', false: '사용 안함' }} />
        </div>

        {toggle ? (
          <form id="view" onSubmit={handleSubmit(onValidView)}>
            <BuilderInput
              title="버튼 설명"
              register={register('description')}
              onChange={(e) => {
                productservices.setDescription(e.target.value);
              }}
              type="text"
              placeholder="예: 이 상품이 궁금하세요?"
              id=""
            />
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
              &#8226; 클릭을 유도할 수 있는 메시지를 입력해주세요. <br />
              &#8226; 최대 30자.
            </div>
            <BuilderInput
              title="버튼 텍스트"
              register={register('text')}
              type="text"
              placeholder="예: 상품 보러가기"
              id="email"
              onChange={(e) => {
                productservices.setText(e.target.value);
              }}
            />
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
              &#8226; 클릭을 유도할 수 있는 메시지를 입력해주세요. <br />
              &#8226; 최대 8자.
            </div>
            <BuilderInput
              title="버튼 링크"
              register={register('link')}
              onChange={(e) => {
                productservices.setLink(e.target.value);
              }}
              type="text"
              placeholder="예: https://zillinks.com"
              id="email"
            />
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
              &#8226; 버튼 클릭 시, 이동하는 링크를 입력해주세요.
            </div>
          </form>
        ) : (
          <></>
        )}
      </div>
      {/* 저장하기 */}
      <PrimaryButton
        form="view"
        type="primary"
        text="저장하기"
        onClick={() => {}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </div>
  );
}

function ProductUpload() {
  interface EnterForm {
    name: string;
    title: string;
    description: string;
    image: FileList;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EnterForm>();
  const { products, setProducts, imgurl, setImgurl, add, setAdd } = useStore();
  const router = useRouter();

  // const [productdata,setProductData] = useState<any>();
  const [avatarPreview, setAvatarPreview] = useState('');

  // 제품/서비스 추가하기 api 요청
  const {
    mutate: productmutate,
    isLoading: userLoading,
    error: usererror,
  } = useMutation(productadd, {
    onSuccess: (data) => {
      //저장하기가 성공하면 결과값의 데이터를 원래 products에 저장, 여기서 사용자가 넣은 이미지 결과를 바로 볼 수 있음
      const updatedProducts = products.map((product, index) => {
        if (index === products.length - 1) {
          return {
            ...product,
            products_and_services_element_id: data.products_and_services_element_id,
            order: data.order,
            name: data.name,
            title: data.title,
            description: data.description,
            image: data.image,
          };
        }
        return product;
      });
      setProducts(updatedProducts);

      setAdd(false); // 저장하기가 성공하면 뒤로가기
    },
    onError: (err: AxiosError) => {
      const Eresponse = err.response?.data;
      const { data }: any = Eresponse;
      console.log(data.value);
    },
  });
  console.log(products);

  // 이미지를 포함하여 요청을 보낼 경우 이미지 경로를 미리 받아와서 요청 보내기
  const token = getCookie('access_token');
  const onValid = async (data: EnterForm) => {
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
        name: data.name,
        title: data.title,
        description: data.description,
        image: avatar,
      };

      productmutate(user);
    } catch (error) {
      console.log(error);
    }
  };
  // 이미지의 삭제 버튼 클릭시 미리보기 이미지 삭제
  const deleteonClick = () => {
    setAvatarPreview('');
    setImgurl('');
  };

  return (
    <div className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 제품/서비스 소개" />
      <div className="font-[700] text-[24px] mt-[16px] flex items-center">
        <img src="/product.png" alt="product" className="w-[26px] h-[26px]" />
        <span className="ml-[8px]">제품/서비스 소개</span>
      </div>
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        제품과 서비스를 자세히 알려주세요.
      </div>
      <form id="product" onSubmit={handleSubmit(onValid)}>
        <div className="mt-[48px]">
          <div className="mt-[24px] font-[700] text-[14px] text-GrayScalePrimary-700">제품 서비스 이미지</div>
          <div
            className={
              'w-[264px] h-[138px] rounded-[6px] border-[2px] border-GrayScalePrimary-300 mt-[8px] indent-[10px] flex flex-col'
            }
          >
            {/* 이미지 업로드 시 업로드한 이미지 미리보기 */}
            {avatarPreview === '' ? null : (
              <div className="relative overflow-hidden">
                <div>
                  <img
                    src={avatarPreview}
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
            {avatarPreview === '' ? (
              <>
                <div className="w-[60px] h-[60px] rounded-[10px] bg-primary-100 mx-[auto] mt-[14px]">
                  <input
                    className="hidden"
                    type="file"
                    id="file-input"
                    {...register('image', {
                      onChange: (e) => {
                        validateImageSize({ e, setAvatarPreview, setImgurl });
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
            340x250, png 권장, 최대 100mb
          </div>
          <div className="mt-[34px]">
            <BuilderInput
              register={register('name')}
              title="제품 서비스 이름"
              type="text"
              placeholder="예: 빗코"
              id="pageTitle"
              onChange={(e) => {
                const updatedProducts = products.map((product, index) => {
                  if (index === products.length - 1) {
                    return {
                      ...product,
                      name: e.target.value,
                    };
                  }
                  return product;
                });

                setProducts(updatedProducts);
              }}
            />
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">최대12자</div>
            <BuilderInput
              register={register('title')}
              title="제품 서비스 타이틀"
              type="text"
              placeholder="예: 회사 소개 페이지 플러그인"
              id="pageTitle"
              onChange={(e) => {
                const updatedProducts = products.map((product, index) => {
                  if (index === products.length - 1) {
                    return {
                      ...product,
                      title: e.target.value,
                    };
                  }
                  return product;
                });

                setProducts(updatedProducts);
              }}
            />
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
              최대 20자
            </div>
            <BuilderTextarea
              register={register('description')}
              title="제품 서비스 설명"
              type="text"
              placeholder="예: 예: 빗코는 디지털 가상 자산에 투자하는 누구나, 쉽고 편리하게 자산관리를 안정적으로 할 수 있도록 가이드를 제시하는 모바일 어플리케이션입니다."
              id="businessNumber"
              onChange={(e) => {
                const updatedProducts = products.map((product, index) => {
                  if (index === products.length - 1) {
                    return {
                      ...product,
                      description: e.target.value,
                    };
                  }
                  return product;
                });

                setProducts(updatedProducts);
              }}
            />
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
              &#8226; 제품/서비스에 대한 상세 설명을 작성해주세요. <br />
              &#8226; 최대 80자.
            </div>
          </div>
        </div>
      </form>

      {/* 저장하기 */}
      <PrimaryButton
        type="primary"
        text="저장하기"
        form="product"
        onClicka={() => {}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </div>
  );
}

export default function Product() {
  const { add } = useStore();
  return <div>{add ? <Layout>{<ProductUpload />}</Layout> : <Layout>{<ProductView />}</Layout>}</div>;
}
