import Header from '@/components/common/Header';
import ContactContents from '@/components/dashboard/contact/ContactContents';
import Sidebar from '@/components/dashboard/side/Sidebar';

export default function Unconfirmed() {
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
