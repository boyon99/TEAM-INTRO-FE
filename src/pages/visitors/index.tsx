import Header from '@/components/common/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import VisitorsContents from '@/components/dashboard/VisitorsContents';

export default function Visitors() {
  return (
    <div>
      <Header />
      <section className='flex'>
        <Sidebar />
        <VisitorsContents />
      </section>
    </div>
  );
}
