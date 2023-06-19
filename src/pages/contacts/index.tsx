import Header from '@/components/common/Header';
import ContactsContents from '@/components/dashboard/ContactsContents';

import Sidebar from '@/components/dashboard/Sidebar';

export default function Contacts() {
  return (
    <div>
      <Header />
      <section className='flex'>
        <Sidebar />
        <ContactsContents />
      </section>
    </div>
  );
}
