import Dropdown from './Dropdown';

export default function VisitorsTable() {
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

  return (
    <div className="h-[calc(100vh-224px)] border border-GrayScalePrimary-150 bg-white rounded-xl mt-5">
      {data ? (
        <section>
          <Dropdown />
        </section>
      ) : (
        <p className="flex justify-center items-center h-full text-[22px] text-GrayScaleNeutral-1000">
          방문자 기록이 없습니다!
        </p>
      )}
    </div>
  );
}
