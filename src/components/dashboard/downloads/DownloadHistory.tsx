import DropdownExcel from '../DropdownExcel';
import DownloadTable from './DownloadTable';

const dropdownItems = [
  {
    id: 1,
    name: '전체 보기',
  },
  {
    id: 2,
    name: '회사소개서',
  },
  {
    id: 3,
    name: '미디어킷',
  },
];

const data = [
  {
    category: '회사소개서',
    date: '23.06.10',
  },
  {
    category: '미디어킷',
    date: '23.06.10',
  },
  {
    category: '회사소개서',
    date: '23.06.10',
  },
  {
    category: '미디어킷',
    date: '23.06.10',
  },
];

const history = '다운로드 내역';

export default function DownloadHistory() {
  return (
    <div className="bg-white rounded-xl border border-GrayScalePrimary-150 h-64 mt-5 space-y-2">
      <DropdownExcel dropdownItems={dropdownItems} data={'data'} history={history} />
      <DownloadTable data={data} />
    </div>
  );
}
