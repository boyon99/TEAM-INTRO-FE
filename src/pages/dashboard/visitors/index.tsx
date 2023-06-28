import Header from '@/components/common/Header';
import Sidebar from '@/components/dashboard/side/Sidebar';
import VisitorsContents from '@/components/dashboard/visitors/VisitorsContents';

export default function Visitors() {
  return (
    <div>
      <Header />
      <section className="flex">
        <Sidebar />
        <VisitorsContents />
      </section>
    </div>
  );
}
