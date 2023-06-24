import Header from '@/components/common/Header';
import DownloadContents from '@/components/dashboard/downloads/DownloadsContents';
import Sidebar from '@/components/dashboard/side/Sidebar';

export default function Downloads() {
  return (
    <div>
      <Header />
      <section className="flex">
        <Sidebar />
        <DownloadContents />
      </section>
    </div>
  );
}
