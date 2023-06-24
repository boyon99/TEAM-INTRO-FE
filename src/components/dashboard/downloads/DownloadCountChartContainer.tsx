import DownloadCount from './DownloadCount';
import DownloadCountChart from './DownloadCountChart';

export default function DownloadCountChartContainer() {
  return (
    <div className="bg-white rounded-xl border border-GrayScalePrimary-150 h-64 mt-5">
      <h2 className="h-14 leading-[56px] text-center border-b border-b-GrayScalePrimary-150 font-bold">
        주간 다운로드
      </h2>
      <div className="flex justify-between pr-[40px] items-center h-[200px]">
        <DownloadCountChart />
        <DownloadCount />
      </div>
    </div>
  );
}
