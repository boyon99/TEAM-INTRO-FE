import Layout from '@/components/builder/Layout';
import { BeforeButtonSmall, PrimaryButton } from '@/components/common/button';
import { BuilderInput, BuilderTextarea } from '@/components/common/input';
import { ProductTitle } from '@/components/common/product';
import { Toggle, ToggleWidget } from '@/components/common/toggle';
import useStore from '@/store';
import { validateImageSize } from '@/utils/fileCheck';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function TeamCultureView() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { buttondes, setButtondes, add, setAdd, products, setProducts, widgets, setToggle, productservices } =
    useStore();
  const [toggle, setTogglebase] = useState(true);
  const TeamAddonClick = () => {
    setAdd(!add);
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
      <div className="mt-[48px]">
        <span className="font-bold text-sm/[100%] text-[#57566a]">사용여부</span>
        <div className="mt-[12px]">
          <ToggleWidget
            toggle={widgets[7].toggle}
            setWidgetToggle={setToggle}
            widgetId={9}
            toggleText={{ true: '사용', false: '사용 안함' }}
          />
        </div>
      </div>
      {widgets[7].toggle ? (
        <>
          <div className="mt-[48px]">
            <span className="font-bold text-lg/[110%] text-[#57566a]">연혁 편집</span>
          </div>
          <ProductTitle TeamAddonClick={TeamAddonClick} />
        </>
      ) : (
        <></>
      )}

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

function TeamCultureAdd() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { products, setProducts, imgurl, setImgurl, add, setAdd } = useStore();

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
      <form id="product">
        <div className="mt-[48px]">
          <span className="mt-[20px] text-GrayScalePrimary-700 font-bold text-[18px]/110%">연혁 추가하기</span>
          <div className="mt-[24px] font-[700] text-[14px] text-GrayScalePrimary-700">연혁 이미지</div>
          <div
            className={
              'w-[264px] h-[138px] rounded-[6px] border-[2px] border-GrayScalePrimary-300 mt-[8px] indent-[10px] flex flex-col'
            }
          >
            {/* 이미지 업로드 시 업로드한 이미지 미리보기 */}

            <div className="relative overflow-hidden">
              <div>
                <img src="" className="m-[auto] object-contain max-w-[264px] max-h-[138px]" alt="logo-img" />
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
                <input
                  className="hidden"
                  type="file"
                  id="file-input"
                  {...register('image', {
                    onChange: (e) => {
                      validateImageSize({ e, setImgurl });
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
          </div>

          <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            500x330, png 권장, 최대 100mb
          </div>
          <div className="mt-[34px]">
            <BuilderInput
              register={register('name')}
              title="날짜"
              type="text"
              placeholder="예: 2023-07-07"
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
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">최대20자</div>
            <BuilderInput
              register={register('name')}
              title="연혁"
              type="text"
              placeholder="예: 패스트캠퍼스 기업협력 프로젝트 MOU 진행"
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
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">최대30자</div>

            <BuilderTextarea
              register={register('description')}
              title="연혁 설명"
              type="text"
              placeholder="예: 패스트캠퍼스와 함께 진행한 MOU프로젝트, 전체 고객 수 30프로 이상 증가하는 프로젝트로 다양한 파트너사에 긍정적 피드백 받음"
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
        form="product"
        onClicka={() => {}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </div>
  );
}

export default function TeamCulture() {
  const { add } = useStore();
  return <div>{add ? <Layout>{<TeamCultureAdd />}</Layout> : <Layout>{<TeamCultureView />}</Layout>}</div>;
}
