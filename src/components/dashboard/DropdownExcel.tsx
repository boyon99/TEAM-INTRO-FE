import { PrimaryButton } from '../common/button';
import Dropdown from './visitors/Dropdown';
import { useState } from 'react';
import useModal from '@/hooks/useModal';
import { createPortal } from 'react-dom';
import { ExcelDownloadModal } from '@/components/common/popup';

export type DropdownExelProps = {
  dropdownItems: {
    id: number;
    name: string;
  }[];
  data: any;
  defaultValue?: {
    id: number;
    name: string;
  };
};

export default function DropdownExcel({ dropdownItems, data, defaultValue }: DropdownExelProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { openModal, closeModal } = useModal(showModal, setShowModal);
  return (
    <section className="relative h-[58px] border-b border-b-GrayScalePrimary-150">
      <Dropdown dropdownItems={dropdownItems} defaultValue={defaultValue} />
      <PrimaryButton
        type="primary"
        text="엑셀 다운로드"
        classname="font-bold text-base w-32 h-10 mr-6 absolute right-0 top-1/2 -translate-y-1/2"
        onClick={openModal}
      />
      {showModal && createPortal(<ExcelDownloadModal handleClick={closeModal} />, document.body)}
    </section>
  );
}
