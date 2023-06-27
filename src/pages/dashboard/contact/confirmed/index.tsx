import Header from '@/components/common/Header';
import Loader from '@/components/dashboard/Loader';
import ContactContents from '@/components/dashboard/contact/ContactContents';
import LandingPage from '@/components/dashboard/main/LandingPage';
import Sidebar from '@/components/dashboard/side/Sidebar';
import useContact from '@/hooks/useContact';
import { AxiosError } from 'axios';
import { useState } from 'react';

export default function ContactConfirmed() {
  const [page, setPage] = useState<number>(0);
  const { isLoading, isError, error, data, isFetching, isPreviousData, isSuccess } = useContact({
    status: 'CONFIRM',
    page,
  });
  const err = error as AxiosError;

  const errStatus = err?.response?.status;
  console.log(data);
  return (
    <div>
      <Header />
      <section className="flex">
        <Sidebar />
        {isLoading && (
          <div className="flex items-center h-[calc(100vh-75px)] justify-center w-full">
            <Loader className="w-20 h-20" />
          </div>
        )}
        {isError && errStatus !== 400 && (
          <p className="text-error-500 font-bold text-2xl h-[calc(100vh-75px)] w-full flex items-center justify-center">
            연락 관리 불러오기 실패
          </p>
        )}
        {errStatus === 400 && <LandingPage />}

        {isSuccess && (
          <ContactContents
            data={data}
            page={page}
            setPage={setPage}
            isFetching={isFetching}
            isPreviousData={isPreviousData}
          />
        )}
      </section>
    </div>
  );
}
