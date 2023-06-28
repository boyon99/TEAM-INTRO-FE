import Header from '@/components/common/Header';
import Loader from '@/components/dashboard/Loader';
import DashboardContents from '@/components/dashboard/main/DashboardContents';
import LandingPage from '@/components/dashboard/main/LandingPage';
import Sidebar from '@/components/dashboard/side/Sidebar';
import { useDashboard } from '@/hooks/useDashboard';
import { AxiosError } from 'axios';

export default function Dashboard() {
  const { data, isLoading, isError, isSuccess, error } = useDashboard();
  const err = error as AxiosError;

  const errStatus = err?.response?.status;

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        {isLoading && (
          <div className="flex items-center h-[calc(100vh-75px)] justify-center w-full">
            <Loader className="w-20 h-20" />
          </div>
        )}
        {isError && errStatus !== 400 && (
          <p className="text-error-500 font-bold text-2xl h-[calc(100vh-75px)] w-full flex items-center justify-center">
            대시보드 조회 실패
          </p>
        )}
        {errStatus === 400 && <LandingPage />}

        {isSuccess && <DashboardContents data={data} />}
      </div>
    </div>
  );
}
