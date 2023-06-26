import Layout from '@/components/builder/Layout';
import Button from '@/components/button';
import { BeforeButtonSmall, PrimaryButton } from '@/components/common/button';
import { BuilderInput, BuilderTextarea, BuilderUploadImage, DuplicateCheck } from '@/components/common/input';
import { useUploadImage } from '@/hooks/useUploadImage';
import { useUpdateSite } from '@/hooks/useUploadSite';
import useStore from '@/store';
import React, { useState } from 'react';

function Preview() {
  const { siteInfo, setSiteInfo, uploadImage, setUploadImage, setPaivcon } = useStore();
  const uploadImageMutation = useUploadImage(uploadImage, 'site');
  const updateSiteMutation = useUpdateSite(siteInfo);

  return (
    <div className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 사이트 정보 수정" />
      <div className="font-[700] text-[24px] mt-[16px]">사이트 정보 수정</div>
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        웹페이지 기본 설정과 네이버, 구글 등의 검색 포털의 검색 결과 화면에서 보여지는 정보들입니다.
      </div>
      {/* 웹 페이지 관리 */}
      <div className="mt-[48px] font-[700] text-[18px] text-GrayScalePrimary-700">웹 페이지 관리</div>
      <BuilderUploadImage
        title="파비콘 설정"
        ratio={1}
        imgSrc={siteInfo.pavicon}
        setImgSrc={setPaivcon}
        setUploadImg={setUploadImage}
      />
      <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        120x120, icon/png 권장, 최대 100mb
      </div>
      <DuplicateCheck
        title="기본 주소"
        type="text"
        placeholder="예: zillinks.com/corp/[주소 입력]"
        id="commonAddress"
        required={true}
        value={siteInfo.sub_domain}
        onChange={(e) => {
          setSiteInfo({ ...siteInfo, sub_domain: e.target.value });
        }}
      />
      <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        기본으로 사용할 주소로 변경해주세요.
      </div>
      {/* 검색결과 관리 */}
      <div className="mt-[48px] font-[700] text-[18px] text-GrayScalePrimary-700">검색결과 관리</div>

      <BuilderInput
        title="페이지 제목"
        type="text"
        placeholder="예: 질링스 기업 소개"
        id="pageTitle"
        value={siteInfo.title}
        onChange={(e) => {
          setSiteInfo({ ...siteInfo, title: e.target.value });
        }}
      />
      <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        검색결과에 노출되는 페이지 제목을 설정해주세요.
      </div>
      <BuilderTextarea
        title="페이지 설명"
        type="text"
        placeholder="예: 회사와 회사 간의 연결로 서로 성장 할 수 있도록 합니다."
        id="businessNumber"
        value={siteInfo.description}
        onChange={(e) => {
          setSiteInfo({ ...siteInfo, description: e.target.value });
        }}
      />
      <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
        검색검색엔진에 노출됩니다. 회사의 이름 또는 다루는 상품 정보 등, 제목과 연관되는 정보를 등록해주세요.
      </div>

      {/* 저장하기 */}
      <PrimaryButton
        inputType="button"
        type="primary"
        text="저장하기"
        onClick={() => {
          if (uploadImage !== null) {
            updateSiteMutation();
          } else {
            uploadImageMutation();
          }
        }}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </div>
  );
}

export default function ChangeSite() {
  return (
    <div>
      <Layout>{<Preview />}</Layout>
    </div>
  );
}
