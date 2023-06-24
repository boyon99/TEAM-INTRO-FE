import { PrimaryButton } from '@/components/common/button';
import Dropdown from './Dropdown';
import VisitorsTable from './VisitorsTable';
import { useState } from 'react';
import useModal from '@/hooks/useModal';
import { createPortal } from 'react-dom';
import { ExcelDownloadModal } from '@/components/common/popup';

export default function VisitorsTableContainer() {
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const { openModal, closeModal } = useModal(showModal, setShowModal);
  return (
    <div className="h-[calc(100vh-224px)] border border-GrayScalePrimary-150 bg-white rounded-xl mt-5">
      {data ? (
        <div>
          <section className="relative h-[58px] border-b border-b-GrayScalePrimary-150">
            <Dropdown />
            <PrimaryButton
              type="primary"
              text="엑셀 다운로드"
              classname="font-bold text-base w-32 h-10 mr-6 absolute right-0 top-1/2 -translate-y-1/2"
              onClick={openModal}
            />
            {showModal && createPortal(<ExcelDownloadModal handleClick={closeModal} />, document.body)}
          </section>
          <VisitorsTable data={data} />
        </div>
      ) : (
        <p className="flex justify-center items-center h-full text-[22px] text-GrayScaleNeutral-1000">
          방문자 기록이 없습니다!
        </p>
      )}
    </div>
  );
}
