import Header from '@/components/common/Header';
import DashboardContents from '@/components/dashboard/DashboardContents';
import Sidebar from '@/components/dashboard/Sidebar';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <section className='flex'>
        <Sidebar />
        <DashboardContents />
      </section>
    </div>
  );
}
