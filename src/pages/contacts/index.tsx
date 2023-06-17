import Header from '@/components/common/Header';

import Sidebar from '@/components/dashboard/Sidebar';

export default function Contacts() {
  return (
    <div>
      <Header />
      <section className='flex'>
        <Sidebar />
      </section>
    </div>
  );
}
