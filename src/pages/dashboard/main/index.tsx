import Header from '@/components/common/Header';
import DashboardContents from '@/components/dashboard/main/DashboardContents';
import LandingPage from '@/components/dashboard/main/LandingPage';
import Sidebar from '@/components/dashboard/side/Sidebar';
import useUser from '@/hooks/useVerify';


export default function Dashboard() {
  const introPage = true;
  return (
    <div>
      <Header />
      <section className={`flex ${!introPage && 'justify-center mt-[117px]'} `}>
        {introPage ? (
          <>
            <Sidebar />
            <DashboardContents />
          </>
        ) : (
          <LandingPage />
        )}
      </section>
    </div>
  );
}
