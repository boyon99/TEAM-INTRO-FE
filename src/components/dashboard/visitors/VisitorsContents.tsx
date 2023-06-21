import Title from '../Title';
import VisitorsTable from './VisitorsTable';

export default function VisitorsContents() {
  return (
    <div className="border-l-2 border-l-GrayScalePrimary-200 bg-GrayScalePrimary-100 w-full px-9 pt-6 py-[39px] h-[calc(100vh-75px)]">
      <Title title="방문자 기록" style="relative">
        <p className="absolute -bottom-4 text-[13px] text-GrayScalePrimary-600 right-[15.5px]">
          ※ 최근 5일간의 기록만 제공됩니다.
        </p>
      </Title>
      <VisitorsTable />
    </div>
  );
}
