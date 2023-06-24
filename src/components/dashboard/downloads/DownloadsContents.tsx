import Title from '../Title';
import DownloadCountChartContainer from './DownloadCountChartContainer';

export default function DownloadsContents() {
  return (
    <div className="border-l-2 border-l-GrayScalePrimary-200 bg-GrayScalePrimary-100 w-full px-9 pt-6 py-[39px] h-[calc(100vh-75px)]">
      <Title title="다운로드 관리" />

      <DownloadCountChartContainer />
    </div>
  );
}
