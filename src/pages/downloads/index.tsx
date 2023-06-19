import Header from '@/components/common/Header';
import DownloadContents from '@/components/dashboard/DownloadsContents';
import Sidebar from '@/components/dashboard/Sidebar';

export default function Downloads() {
  return (
    <div>
      <Header />
      <section className='flex'>
        <Sidebar />
        <DownloadContents />
      </section>
    </div>
  );
}
