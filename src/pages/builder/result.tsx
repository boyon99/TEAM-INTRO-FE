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

function PerforManceView() {
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
      <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 핵심성과" />
      <div className="font-[700] text-[24px] mt-[16px] flex items-center">
        <img src="/trophy-variant-outline.png" alt="product" className="w-[26px] h-[26px]" />
        <span className="ml-[8px]">핵심성과</span>
      </div>
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        회사의 임팩트가 드러나고 다른 회사와 차별화 할 수 있는 수치화할 수 있는 성과지표를 보여주세요.
      </div>
      <div className="mt-[48px]">
        <span className="font-bold text-sm/[100%] text-[#57566a]">사용여부</span>
        <div className="mt-[12px]">
          <ToggleWidget
            toggle={widgets[9].toggle}
            setWidgetToggle={setToggle}
            widgetId={7}
            toggleText={{ true: '사용', false: '사용 안함' }}
          />
        </div>
      </div>
      {widgets[9].toggle ? (
        <>
          <div className="mt-[48px]">
            <span className="font-bold text-lg/[110%] text-[#57566a]">핵심성과 편집</span>
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

function PerforManceAdd() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { products, setProducts, imgurl, setImgurl, add, setAdd } = useStore();

  return (
    <div className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 핵심성과" />
      <div className="font-[700] text-[24px] mt-[16px] flex items-center">
        <img src="/trophy-variant-outline.png" alt="product" className="w-[26px] h-[26px]" />
        <span className="ml-[8px]">핵심성과</span>
      </div>
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        회사의 임팩트가 드러나고 다른 회사와 차별화 할 수 있는 수치화할 수 있는 성과지표를 보여주세요.
      </div>
      <form id="product">
        <div className="mt-[48px]">
          <span className="mt-[20px] text-GrayScalePrimary-700 font-bold text-[18px]/110%">핵심성과 변경</span>

          <div className="mt-[34px]">
            <BuilderInput
              register={register('name')}
              title="성과지표 설명"
              type="text"
              placeholder="예: 핵심 지표"
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
              register={register('name')}
              title="성과지표 부가 설명"
              type="text"
              placeholder="예: 전년 대비 상승율"
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

            <BuilderInput
              register={register('name')}
              title="숫자 지표"
              type="text"
              placeholder="예: 99%"
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
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
              정확한 정보일 때 기업에 대한 신뢰도가 높아집니다.
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

export default function PerforMance() {
  const { add } = useStore();
  return <div>{add ? <Layout>{<PerforManceAdd />}</Layout> : <Layout>{<PerforManceView />}</Layout>}</div>;
}
