import Header from '@/components/common/Header';
import ContactContents from '@/components/dashboard/ContactContents';
import Sidebar from '@/components/dashboard/Sidebar';

export default function ContactConfirmed() {
  return (
    <div>
      <Header />
      <section className="flex">
        <Sidebar />
        <ContactContents />
      </section>
    </div>
  );
}
