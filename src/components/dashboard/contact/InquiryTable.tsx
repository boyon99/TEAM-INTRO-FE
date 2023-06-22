import { useEffect, useState } from 'react';
import { PrimaryButton } from '../../common/button';
import { Checkbox } from '../../common/toggle';
import ActiveLink from '../ActiveLink';
import { createPortal } from 'react-dom';
import { ConfirmModal, DetailModal } from '../../common/popup';
import useModal from '@/hooks/useModal';

export interface Inquiry {
  contact_us_log_id: number;
  email: string;
  name: string;
  content: string;
  type: string;
  date: string;
  selected?: boolean;
}

export default function InquiryTable() {
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const { openModal: openConfirmModal, closeModal: closeConfirmModal } = useModal(
    showConfirmModal,
    setShowConfirmModal,
  );
  const { openModal: openDeleteModal, closeModal: closeDeleteModal } = useModal(showDeleteModal, setShowDeleteModal);
  const { openModal: openDetailModal, closeModal: closeDetailModal } = useModal(showDetailModal, setShowDetailModal);
  const [rows, setRows] = useState<Inquiry[] | []>([]);
  const [selectedRows, setSelectedRows] = useState<Inquiry[]>([]);
  const [allSelected, setAllSelected] = useState<boolean>(false);

  const data = [
    {
      contact_us_log_id: 1,
      email: 'admin@admin.com',
      name: '김응열',
      content:
        '안녕하세요. ##명의 활성 사용자가 있는 ##을 서비스하고 있는 ##입니다. 저희가 현재 ##를 준비중인데요, 관련해 도움 받고자 요청드립니다. 괜찮으시다면 약 1시간 가량의 오프라인 미팅 요청드립니다. 기존 저희 서비스는 다음 링크로 보실 수 있어요. https:// ~ 인터뷰 진행 의사 회신 부탁드립니다. 감사합니다.',
      type: 'IR 자료 요청',
      date: '23.06.15',
    },
    {
      contact_us_log_id: 2,
      email: 'admin@admin.com',
      name: '김응열',
      content:
        '안녕하세요. ##명의 활성 사용자가 있는 ##을 서비스하고 있는 ##입니다. 저희가 현재 ##를 준비중인데요, 관련해 도움 받고자 요청드립니다. 괜찮으시다면 약 1시간 가량의 오프라인 미팅 요청드립니다. 기존 저희 서비스는 다음 링크로 보실 수 있어요. https:// ~ 인터뷰 진행 의사 회신 부탁드립니다. 감사합니다.',
      type: 'IR 자료 요청',
      date: '23.06.15',
    },
    {
      contact_us_log_id: 3,
      email: 'admin@admin.com',
      name: '김응열',
      content:
        '안녕하세요. ##명의 활성 사용자가 있는 ##을 서비스하고 있는 ##입니다. 저희가 현재 ##를 준비중인데요, 관련해 도움 받고자 요청드립니다. 괜찮으시다면 약 1시간 가량의 오프라인 미팅 요청드립니다. 기존 저희 서비스는 다음 링크로 보실 수 있어요. https:// ~ 인터뷰 진행 의사 회신 부탁드립니다. 감사합니다.',
      type: 'IR 자료 요청',
      date: '23.06.15',
    },
  ];

  // select option으로 처리

  useEffect(() => {
    const newData = data.map((el) => ({
      ...el,
      selected: false,
    }));
    setRows(newData);
  }, []);

  const toggleRow = (id: number) => {
    const updatedRows = rows.map((row) => {
      if (id === row.contact_us_log_id) {
        row.selected = !row.selected;
      }
      return row;
    });
    setRows(updatedRows);

    setSelectedRows([...updatedRows.filter((row) => row.selected === true)]);
  };

  const toggleAllSelected = () => {
    setAllSelected((prev) => !prev);

    const updatedRows = rows.map((row) => {
      row.selected = !allSelected;
      return row;
    });

    setRows(updatedRows);

    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(updatedRows);
    }
  };

  useEffect(() => {
    const selectedValueList = rows.map((row) => row.selected);

    const allTrue = selectedValueList.every((el) => el === true);

    if (allTrue) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  }, [rows, selectedRows]);

  return (
    <div className="h-[calc(100vh-224px)] border border-GrayScalePrimary-150 bg-white rounded-xl mt-5">
      {rows.length ? (
        <>
          <div className="flex items-center justify-between pl-9 pr-5 h-[58px] border-b border-b-GrayScalePrimary-200">
            <section className="text-[15px] text-GrayScalePrimary-600 space-x-[23px]">
              <button>확인</button>
              <button>삭제</button>
            </section>
            <section>
              <ActiveLink
                href={'/dashboard/contact/unconfirmed'}
                order={3}
                activeClassName="confirm-active-link"
                className="confirm-link"
              >
                확인 필요
              </ActiveLink>
              <ActiveLink
                href={'/dashboard/contact/confirmed'}
                order={3}
                activeClassName="confirm-active-link"
                className="confirm-link"
              >
                확인 완료
              </ActiveLink>
            </section>
          </div>

          <table className="px-[15px]">
            <thead>
              <tr className="flex items-center border-b border-b-GrayScalePrimary-200 w-full h-[54px] pl-4">
                <Checkbox checked={allSelected} handleClick={toggleAllSelected} />

                <th className="text-[15px] text-GrayScaleNeutral-1000 mx-10 text-center w-[130px]">이메일</th>
                <th className="text-[15px] text-GrayScaleNeutral-1000 text-center w-10">이름</th>
                <th className="text-[15px] text-GrayScaleNeutral-1000 text-center mx-10 w-[150px]">내용</th>
                <th className="text-[15px] text-GrayScaleNeutral-1000 w-[70px] text-center">구분</th>
                <th className="w-14 mx-10 flex items-center justify-center">
                  <button>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_1382_14335" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                        <rect width="18" height="18" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1382_14335)">
                        <path
                          d="M11.7298 12.0202L12.5202 11.2298L9.68746 8.39693V4.87498H8.5625V8.85287L11.7298 12.0202ZM9.12624 15.75C8.14079 15.75 7.21451 15.563 6.34741 15.189C5.4803 14.815 4.72604 14.3074 4.08463 13.6663C3.4432 13.0251 2.93541 12.2712 2.56124 11.4045C2.18708 10.5378 2 9.61169 2 8.62624C2 7.64079 2.187 6.71451 2.561 5.84741C2.935 4.9803 3.44256 4.22604 4.08369 3.58463C4.72483 2.9432 5.47876 2.43541 6.34548 2.06124C7.21219 1.68708 8.13828 1.5 9.12373 1.5C10.1092 1.5 11.0355 1.687 11.9026 2.061C12.7697 2.435 13.5239 2.94256 14.1653 3.58369C14.8068 4.22483 15.3146 4.97876 15.6887 5.84548C16.0629 6.71219 16.25 7.63828 16.25 8.62373C16.25 9.60918 16.063 10.5355 15.689 11.4026C15.315 12.2697 14.8074 13.0239 14.1663 13.6653C13.5251 14.3068 12.7712 14.8146 11.9045 15.1887C11.0378 15.5629 10.1117 15.75 9.12624 15.75ZM9.12498 14.625C10.7875 14.625 12.2031 14.0406 13.3719 12.8719C14.5406 11.7031 15.125 10.2875 15.125 8.62498C15.125 6.96248 14.5406 5.54686 13.3719 4.37811C12.2031 3.20936 10.7875 2.62498 9.12498 2.62498C7.46248 2.62498 6.04686 3.20936 4.87811 4.37811C3.70936 5.54686 3.12498 6.96248 3.12498 8.62498C3.12498 10.2875 3.70936 11.7031 4.87811 12.8719C6.04686 14.0406 7.46248 14.625 9.12498 14.625Z"
                          fill="#1C1B1F"
                        />
                      </g>
                    </svg>
                  </button>
                </th>
              </tr>
            </thead>

            {rows.map((el) => (
              <tbody key={el.contact_us_log_id}>
                <tr className="h-[68px] flex items-center w-full pl-4">
                  <Checkbox checked={el.selected} handleClick={() => toggleRow(el.contact_us_log_id)} />

                  <div onClick={openDetailModal} className="cursor-pointer flex items-center">
                    <td className="text-[14px] text-GrayScalePrimary-800 mx-10 text-center truncate w-[130px]">
                      {el.email}
                    </td>
                    <td className="text-[14px] text-GrayScalePrimary-800 text-center truncate w-10">{el.name}</td>
                    <td className="text-[14px] text-GrayScalePrimary-800 mx-10 text-center truncate w-[150px]">
                      {el.content}
                    </td>
                    <td className="text-[14px] text-GrayScalePrimary-800 text-center truncate w-[70px]">{el.type}</td>
                    <td className="mx-10 text-[14px] text-GrayScalePrimary-800 w-14 text-center">{el.date}</td>
                  </div>

                  <PrimaryButton
                    text="확인"
                    classname="font-bold w-[72px] h-9 rounded-lg mr-[6px]"
                    type="primary"
                    onClick={openConfirmModal}
                  />
                  <button
                    onClick={openDeleteModal}
                    className="w-[72px] h-9 border border-GrayScalePrimary-500 rounded-lg text-sm text-GrayScalePrimary-600"
                  >
                    삭제
                  </button>
                </tr>
                {showDetailModal && createPortal(<DetailModal closeModal={closeDetailModal} {...el} />, document.body)}
              </tbody>
            ))}
            {showDeleteModal &&
              createPortal(
                <ConfirmModal closeModal={closeDeleteModal} msg1="연락 내역을 삭제하시겠습니까?" />,
                document.body,
              )}
            {showConfirmModal &&
              createPortal(
                <ConfirmModal
                  closeModal={closeConfirmModal}
                  msg1="연락 내역을 확인으로 변경하시겠습니까?"
                  msg2="· 중요한 연락만 남겨주세요."
                />,
                document.body,
              )}
          </table>
        </>
      ) : (
        <p className="flex justify-center items-center h-full text-[22px] text-GrayScaleNeutral-1000">
          연락 내역이 없습니다!
        </p>
      )}
    </div>
  );
}
