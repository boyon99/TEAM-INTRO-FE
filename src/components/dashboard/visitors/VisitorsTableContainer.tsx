import DropdownExcel from '../DropdownExcel';
import VisitorsTable from './VisitorsTable';

export default function VisitorsTableContainer() {
  const data = [
    {
      device: 'iPhone 7',
      keyword: '질링스 회사 소개',
      date: '23.06.10',
    },
    {
      device: 'iPhone 7',
      keyword: '질링스 회사 소개',
      date: '23.06.10',
    },
    {
      device: 'iPhone 7',
      keyword: '질링스 회사 소개',
      date: '23.06.10',
    },
  ];

  const dropdownItems = [
    {
      id: 1,
      name: '조회 기록',
    },
    {
      id: 2,
      name: '공유 기록',
    },
  ];

  return (
    <div className="h-[calc(100vh-224px)] border border-GrayScalePrimary-150 bg-white rounded-xl mt-5">
      {data ? (
        <div>
          <DropdownExcel dropdownItems={dropdownItems} data={'data'} />
          <VisitorsTable data={data} />
        </div>
      ) : (
        <p className="flex justify-center items-center h-full text-[22px] text-GrayScaleNeutral-1000">
          방문자 기록이 없습니다!
        </p>
      )}
    </div>
  );
}
