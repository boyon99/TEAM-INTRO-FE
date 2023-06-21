import { PrimaryButton } from '../common/button';
import InquiryTable from './InquiryTable';
import Title from './Title';

export default function ContactContents() {
  return (
    <div className="border-l-2 border-l-GrayScalePrimary-200 bg-GrayScalePrimary-100 w-full px-9 pt-6 py-[39px] h-[calc(100vh-75px)]">
      <Title title="연락 관리" style="flex items-center relative">
        <PrimaryButton
          type="primary"
          text="엑셀 다운로드"
          classname="ml-auto font-bold text-base w-32 h-10 mr-6"
          onClick={() => {}}
        />
      </Title>
      <InquiryTable />
    </div>
  );
}
