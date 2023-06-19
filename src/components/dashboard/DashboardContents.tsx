import Title from './Title';
import TodayCounts from './TodayCounts';
import WeeklyCounts from './WeeklyCounts';

export default function DashboardContents() {
  return (
    <div className='border-l-2 border-l-GrayScalePrimary-200 bg-GrayScalePrimary-100 w-full px-9 pt-6 py-[39px]'>
      <Title title='대시보드' />
      <h3 className='ml-[13px] mt-10 font-bold text-lg'>오늘 현황</h3>
      <TodayCounts />
      <h3 className='ml-[13px] mt-10 font-bold text-lg'>주간 현황</h3>
      <WeeklyCounts />
    </div>
  );
}
