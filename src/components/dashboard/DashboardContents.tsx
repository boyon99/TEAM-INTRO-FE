import Title from './Title';
import TodayCounts from './TodayCounts';

export default function DashboardContents() {
  return (
    <div className='border-l-2 border-l-GrayScalePrimary-200 bg-GrayScalePrimary-100 h-[calc(100vh-75px)] w-full px-9 pt-6'>
      <Title title='대시보드' />
      <h3 className='ml-[13px] mt-10 font-bold text-lg'>오늘 현황</h3>
      <TodayCounts />
    </div>
  );
}
