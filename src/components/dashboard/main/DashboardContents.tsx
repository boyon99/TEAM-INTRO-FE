import Title from '../Title';
import TodayCounts from './TodayCounts';
import WeeklyCounts from './WeeklyCounts';
import { DashboardData } from '@/interfaces/dashboard';

export default function DashboardContents({ data }: { data: DashboardData }) {
  return (
    <div className="border-l-2 border-l-GrayScalePrimary-200 bg-GrayScalePrimary-100 w-full px-9 pt-6 py-[39px]">
      <Title title="대시보드" style="relative" />
      <h3 className="ml-[13px] mt-10 font-bold text-lg">오늘 현황</h3>
      <TodayCounts data={data} />
      <h3 className="ml-[13px] mt-10 font-bold text-lg">주간 현황</h3>
      <WeeklyCounts data={data} />
    </div>
  );
}
