import { useRef, useState } from 'react';

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

function Dropdown() {
  const items = [
    {
      id: 1,
      name: '조회 기록',
    },
    {
      id: 2,
      name: '공유 기록',
    },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<{ id: number; name: string }>(items[0]);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  return (
    <button className="relative h-10">
      <ul
        ref={dropdownRef}
        onClick={() => setOpen((prev) => !prev)}
        className={`absolute z-10 flex flex-col gap-y-2 px-4 py-2 font-medium text-main text-body-sm w-[160px] border-[1px] border-main rounded-lg transition-all duration-100 bg-white ${
          open ? 'max-h-[435px]' : 'max-h-10 overflow-hidden'
        }`}
      >
        <li className="flex category justify-between last:border-none">
          {selectedItem.name}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_905_10431" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_905_10431)">
              <path d="M12 9.82143L7 15H17L12 9.82143Z" fill="#1C1B1F" />
            </g>
          </svg>
        </li>
        {items.map((item) => (
          <li
            key={item.id}
            className={`last:border-none category ${item.id === selectedItem.id && 'text-gray-400 font-bold'}`}
            onClick={() => {
              setSelectedItem(item);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </button>
  );
}
