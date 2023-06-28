import { useEffect, useState } from 'react';
import { PrimaryButton } from '../../common/button';
import { Checkbox } from '../../common/toggle';
import ActiveLink from '../ActiveLink';
import { createPortal } from 'react-dom';
import { ConfirmModal, DetailModal } from '../../common/popup';
import useModal from '@/hooks/useModal';
import { Inquiry } from '@/interfaces/dashboard';
import { ContactContentsProps } from './ContactContents';
import ChevronLeft from '@/components/common/icons/ChevronLeft';
import ChevronRight from '@/components/common/icons/ChevronRight';
import ClockDown from '@/components/common/icons/ClockDown';
import Loader from '../Loader';
import usePathConversion from '@/hooks/usePathConversion';

export default function InquiryTable({ data, page, setPage, isFetching, isPreviousData }: ContactContentsProps) {
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
  const [checkedRows, setCheckededRows] = useState<Inquiry[]>([]);
  const [selectedRow, setSelectedRow] = useState<Inquiry | null>(null);
  const [canceledRowsIdList, setCanceledRowsIdList] = useState<number[] | []>([]);
  const [confirmedRowsIdList, setConfirmedRowsIdList] = useState<number[] | []>([]);
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const convertedPath = usePathConversion();

  useEffect(() => {
    setRows(data.content);
  }, [data]);

  const toggleRow = (id: number) => {
    const updatedRows = rows.map((row) => {
      if (id === row.contact_us_log_id) {
        row.selected = !row.selected;
      }
      return row;
    });
    setRows(updatedRows);

    setCheckededRows([...updatedRows.filter((row) => row.selected === true)]);
  };

  const toggleAllSelected = () => {
    setAllSelected((prev) => !prev);

    const updatedRows = rows.map((row) => {
      row.selected = !allSelected;
      return row;
    });

    setRows(updatedRows);

    if (allSelected) {
      setCheckededRows([]);
    } else {
      setCheckededRows(updatedRows);
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
  }, [rows, checkedRows]);

  const selectRow = (row: Inquiry) => {
    openDetailModal();
    setSelectedRow(row);
  };

  const confirmRows = () => {
    const checkedRowsIdList = checkedRows.map((row) => row.contact_us_log_id);

    setConfirmedRowsIdList(checkedRowsIdList);

    openConfirmModal();
  };

  const cancelRows = () => {
    const checkedRowsIdList = checkedRows.map((row) => row.contact_us_log_id);

    setCanceledRowsIdList(checkedRowsIdList);

    openDeleteModal();
  };

  return (
    <>
      {rows.length ? (
        <div className="min-h-[626px] border border-GrayScalePrimary-150 bg-white rounded-xl mt-5">
          <div className="flex items-center justify-between pl-9 pr-5 h-[58px] border-b border-b-GrayScalePrimary-200">
            <section className="text-[15px] text-GrayScalePrimary-600 space-x-[23px]">
              {convertedPath === 'UNCONFIRMED' && <button onClick={confirmRows}>읽음으로 변경</button>}
              <button onClick={cancelRows}>삭제</button>
            </section>
            <section>
              <ActiveLink
                href={'/dashboard/contact/unconfirmed'}
                order={3}
                activeClassName="confirm-active-link"
                className="confirm-link"
              >
                읽지 않음
              </ActiveLink>
              <ActiveLink
                href={'/dashboard/contact/confirmed'}
                order={3}
                activeClassName="confirm-active-link"
                className="confirm-link"
              >
                읽음
              </ActiveLink>
            </section>
          </div>

          <table className="mx-auto">
            <thead>
              <tr className="flex items-center border-b border-b-GrayScalePrimary-200 w-full h-[54px] px-4">
                <th className="h-full leading-[54px]">
                  <Checkbox checked={allSelected} handleClick={toggleAllSelected} />
                </th>

                <th className="text-[15px] text-GrayScaleNeutral-1000 mx-10 text-center w-[130px]">이메일</th>
                <th className="text-[15px] text-GrayScaleNeutral-1000 text-center w-10">이름</th>
                <th className="text-[15px] text-GrayScaleNeutral-1000 text-center mx-10 w-[150px]">내용</th>
                <th className="text-[15px] text-GrayScaleNeutral-1000 w-[70px] text-center">구분</th>
                <th className="w-14 mx-10 flex items-center justify-center">
                  <ClockDown />
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.contact_us_log_id}
                  className="h-[68px] flex items-center w-full border-b-[0.5px] border-b-GrayScalePrimary-150 last:border-b-0 px-4"
                >
                  <td>
                    <Checkbox checked={row.selected} handleClick={() => toggleRow(row.contact_us_log_id)} />
                  </td>

                  <td onClick={() => selectRow(row)} className="cursor-pointer flex items-center">
                    <span className="text-[14px] text-GrayScalePrimary-800 mx-10 text-center truncate w-[130px]">
                      {row.email}
                    </span>
                    <span className="text-[14px] text-GrayScalePrimary-800 text-center truncate w-10">{row.name}</span>
                    <span className="text-[14px] text-GrayScalePrimary-800 mx-10 text-center truncate w-[150px]">
                      {row.content}
                    </span>
                    <span className="text-[14px] text-GrayScalePrimary-800 text-center truncate w-[70px]">
                      {row.type}
                    </span>
                    <span className="mx-10 text-[14px] text-GrayScalePrimary-800 w-14 text-center">{row.date}</span>
                  </td>
                  <td>
                    {convertedPath === 'UNCONFIRMED' && (
                      <PrimaryButton
                        text="읽음"
                        classname="font-bold w-[72px] h-9 rounded-lg mr-[6px]"
                        type="primary"
                        onClick={() => {
                          openConfirmModal();
                          setConfirmedRowsIdList([row.contact_us_log_id]);
                        }}
                      />
                    )}

                    <button
                      onClick={() => {
                        openDeleteModal();
                        setCanceledRowsIdList([row.contact_us_log_id]);
                      }}
                      className="w-[72px] h-9 border border-GrayScalePrimary-500 rounded-lg text-sm text-GrayScalePrimary-600"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            {showDetailModal &&
              selectedRow &&
              createPortal(<DetailModal closeModal={closeDetailModal} {...selectedRow} />, document.body)}
            {showDeleteModal &&
              canceledRowsIdList &&
              createPortal(
                <ConfirmModal
                  action="CANCEL"
                  status={convertedPath}
                  page={page}
                  idList={canceledRowsIdList}
                  closeModal={closeDeleteModal}
                  msg1="연락 내역을 삭제하시겠습니까?"
                />,
                document.body,
              )}
            {showConfirmModal &&
              confirmedRowsIdList &&
              createPortal(
                <ConfirmModal
                  action="CONFIRM"
                  status="UNCONFIRMED"
                  idList={confirmedRowsIdList}
                  page={page}
                  closeModal={closeConfirmModal}
                  msg1="연락 내역을 읽음으로 변경하시겠습니까?"
                  msg2="· 중요한 연락만 남겨주세요."
                />,
                document.body,
              )}
          </table>

          <section className="mt-12 mb-6 gap-x-1 flex items-center justify-center">
            <button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
              <ChevronLeft disabled={page === 0} />
            </button>

            {[...Array(data.total_page)].map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index)}
                disabled={page === index}
                className={`${
                  page === index ? 'font-bold bg-primary-150 text-primary-500' : 'text-GrayScalePrimary-600'
                } text-[13px] w-7 h-7 rounded-[4px]`}
              >
                {index + 1}
              </button>
            ))}
            <article className="relative flex">
              <button
                onClick={() => {
                  if (!isPreviousData && data.has_next) {
                    setPage((old) => old + 1);
                  }
                }}
                // Disable the Next Page button until we know a next page is available
                disabled={isPreviousData || !data?.has_next}
              >
                <ChevronRight disabled={isPreviousData || !data?.has_next} />
              </button>

              {isFetching && <Loader className="w-6 h-6 absolute left-7" />}
            </article>
          </section>
        </div>
      ) : (
        <div className="h-[626px] text-center leading-[626px] text-[22px] text-GrayScaleNeutral-1000 border border-GrayScalePrimary-150 bg-white rounded-xl mt-5">
          연락 내역이 없습니다!
        </div>
      )}
    </>
  );
}
