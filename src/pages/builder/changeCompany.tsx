import EditBuilder from '@/components/builder/LeftPanel';
import Layout from '@/components/builder/Layout';
import React, { useState } from 'react';
import { BeforeButtonSmall, PrimaryButton } from '@/components/common/button';
import useStore from '@/store';
import { BuilderInput, BuilderUploadImage } from '@/components/common/input';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { uploadImage } from '@/apis/builder';
import { useUploadImage } from '@/hooks/useUploadImage';
import { useUpdateCompany } from '@/hooks/useUpdateCompany';

function Preview() {
  const { companyInfo, uploadImage, setUploadImage, setCompanyInfo, setLogo } = useStore();
  const uploadImageMutation = useUploadImage(uploadImage, 'company');
  const updateCompanyMutation = useUpdateCompany(companyInfo);

  return (
    <div className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 회사 정보 수정" />
      <div className="font-[700] text-[24px] mt-[16px]">회사 정보 수정</div>
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        정확한 정보를 기입하고 정보를 최신으로 변경해주세요.
      </div>
      {/* 회사 정보 수정 */}
      <div className="mt-[48px] font-[700] text-[18px] text-GrayScalePrimary-700">회사 정보 수정</div>
      <BuilderInput
        title="회사 이름"
        type="text"
        placeholder="예: 질링스"
        id="companyName"
        required={true}
        value={companyInfo.company_name}
        onChange={(e) => {
          setCompanyInfo({ ...companyInfo, company_name: e.target.value });
        }}
      />
      <BuilderInput
        title="설립일"
        type="text"
        placeholder="2018-03-15"
        id="establishmentDate"
        required={true}
        value={companyInfo.start_date}
        onChange={(e) => {
          setCompanyInfo({ ...companyInfo, start_date: e.target.value });
        }}
      />
      <BuilderInput
        title="대표 성명"
        type="text"
        placeholder="예: 성이름"
        value={companyInfo.representative}
        onChange={(e) => {
          setCompanyInfo({ ...companyInfo, representative: e.target.value });
        }}
        id="representativeName"
        required={true}
      />
      <BuilderUploadImage
        title="회사 로고"
        ratio={1}
        imgSrc={companyInfo.logo}
        setImgSrc={setLogo}
        setUploadImg={setUploadImage}
      />
      <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[16px] pl-[2px]">
        &#8226; 1:1 정방형, png 권장, 최대 100mb <br />
        &#8226; 상단 네비게이션에 노출됩니다.
      </div>
      {/* 기본 설정 */}
      <div className="mt-[48px] font-[700] text-[18px] text-GrayScalePrimary-700">기본 설정</div>
      <BuilderInput
        title="연락용 이메일"
        type="text"
        placeholder="예: contact@zillinks.com"
        id="contact_email"
        value={companyInfo.contact_email}
        onChange={(e) => {
          setCompanyInfo({ ...companyInfo, contact_email: e.target.value });
        }}
      />
      <BuilderInput
        title="사업자 등록번호"
        type="text"
        placeholder="예: 000-0000-00000"
        id="businessNumber"
        readonly={true}
        value={companyInfo.biz_number}
      />
      <BuilderInput
        title="전화번호"
        type="text"
        placeholder="예: 000-0000-0000"
        id="phoneNumber"
        value={companyInfo.phone_number}
        onChange={(e) => {
          setCompanyInfo({ ...companyInfo, phone_number: e.target.value });
        }}
      />
      <BuilderInput
        title="팩스번호"
        type="text"
        placeholder="예: 000-0000-0000"
        id="faxNumber"
        value={companyInfo.fax_number}
        onChange={(e) => {
          setCompanyInfo({ ...companyInfo, fax_number: e.target.value });
        }}
      />

      {/* 저장하기 */}
      <PrimaryButton
        inputType="button"
        type="primary"
        text="저장하기"
        onClick={() => {
          if (uploadImage !== null) {
            updateCompanyMutation();
          } else {
            uploadImageMutation();
          }
        }}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </div>
  );
}

export default function ChangeCompany() {
  return (
    <div>
      <Layout>{<Preview />}</Layout>
    </div>
  );
}
