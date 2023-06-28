import { useDashboard } from '@/hooks/useDashboard';
import Link from 'next/link';
import Loader from '../Loader';

export default function CompanyPreview() {
  const { data, isLoading, isError, isSuccess } = useDashboard();
  const { intro_page_info } = isSuccess && data;
  const { sub_domain, updated_at } = isSuccess && intro_page_info;

  return (
    <div>
      <div className="h-[146px] flex flex-col items-center justify-center">
        <h3 className="flex items-center space-x-3">
          <div className="bg-success-500 w-4 h-4 rounded-full"></div>
          <span className="font-bold text-lg">공개</span>
        </h3>
        <div className="flex flex-col items-center">
          {isLoading ? (
            <Loader className="w-8 h-8 my-2" />
          ) : isError ? (
            <span className="text-error-500 font-bold text-sm my-2">서브도메인 조회 실패</span>
          ) : sub_domain ? (
            <Link href={'/'} className="text-base text-[#121115] flex items-center space-x-3">
              <span className="underline">{sub_domain}</span>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1376_6202" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
                  <rect x="0.125" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1376_6202)">
                  <path
                    d="M4.29167 17.5C3.83333 17.5 3.44097 17.3368 3.11458 17.0104C2.78819 16.684 2.625 16.2917 2.625 15.8333V4.16667C2.625 3.70833 2.78819 3.31597 3.11458 2.98958C3.44097 2.66319 3.83333 2.5 4.29167 2.5H10.125V4.16667H4.29167V15.8333H15.9583V10H17.625V15.8333C17.625 16.2917 17.4618 16.684 17.1354 17.0104C16.809 17.3368 16.4167 17.5 15.9583 17.5H4.29167ZM8.20833 13.0833L7.04167 11.9167L14.7917 4.16667H11.7917V2.5H17.625V8.33333H15.9583V5.33333L8.20833 13.0833Z"
                    fill="#121115"
                  />
                </g>
              </svg>
            </Link>
          ) : (
            <p className="text-sm my-1.5">서브도메인을 생성하세요</p>
          )}
          {updated_at && (
            <span className="text-GrayScalePrimary-700 font-normal text-xs">최종 변경일: {updated_at}</span>
          )}
        </div>
      </div>
      <Link
        href={'/builder'}
        className="inline-block w-full text-center leading-[54px] h-[54px] rounded-b-xl bg-success-500 text-white font-bold text-lg"
      >
        회사 소개 페이지 편집
      </Link>
    </div>
  );
}
