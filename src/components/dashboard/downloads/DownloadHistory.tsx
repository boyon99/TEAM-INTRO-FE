import DropdownExcel from '../DropdownExcel';

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

const defaultValue = {
  id: 0,
  name: '다운로드 내역',
};

export default function DownloadHistory() {
  return (
    <div className="bg-white rounded-xl border border-GrayScalePrimary-150 h-64 mt-5">
      <DropdownExcel dropdownItems={dropdownItems} data={'data'} defaultValue={defaultValue} />
    </div>
  );
}
