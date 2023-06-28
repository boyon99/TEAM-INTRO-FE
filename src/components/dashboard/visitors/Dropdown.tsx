import { useRef, useState } from 'react';
import HandleOutsideClick from './HandleOutsideClick';

type DropdownProps = {
  dropdownItems: {
    id: number;
    name: string;
  }[];
};

export default function Dropdown({ dropdownItems }: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<{ id: number; name: string }>(dropdownItems[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        ref={dropdownRef}
        onClick={() => setOpen((prev) => !prev)}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center"
      >
        <div className="flex items-center space-x-[5.5px]">
          <span className="font-bold">{selectedItem.name}</span>
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_905_10419" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_905_10419)">
                <path d="M12 16.1786L7 11H17L12 16.1786Z" fill="#1C1B1F" />
              </g>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_905_10431" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_905_10431)">
                <path d="M12 9.82143L7 15H17L12 9.82143Z" fill="#1C1B1F" />
              </g>
            </svg>
          )}
        </div>

        {open && (
          <ul
            className={`absolute bg-white mt-9 w-40 h-${
              10 * dropdownItems.length
            } border border-GrayScalePrimary-250 rounded`}
          >
            {dropdownItems.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.id === selectedItem.id && 'font-bold'
                } list-none cursor-pointer h-10 text-center leading-10 text-sm text-GrayScalePrimary-800 hover:text-black hover:bg-primary-150`}
                onClick={() => {
                  setSelectedItem(item);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <HandleOutsideClick dropdownRef={dropdownRef} setOpen={setOpen} />
    </>
  );
}
