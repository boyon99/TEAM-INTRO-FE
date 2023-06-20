import Header from '@/components/common/Header';
import DashboardContents from '@/components/dashboard/DashboardContents';
import LandingPage from '@/components/dashboard/LandingPage';
import Sidebar from '@/components/dashboard/Sidebar';

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
