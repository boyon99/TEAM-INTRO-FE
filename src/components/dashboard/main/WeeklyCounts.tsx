import { DashboardData } from '@/interfaces/dashboard';
import CountBar from './CountBar';
import { format, subDays } from 'date-fns';

export default function WeeklyCounts({ data }: { data: DashboardData }) {
  const { view, sharing, contact_us_log, download_log } = data;

  const currentDate = new Date();

  const viewData = [];

  for (let i = 6; i >= 0; i--) {
    const pastDate = subDays(currentDate, i);
    const formattedDate = format(pastDate, 'MM.dd');

    viewData.push({
      date: formattedDate,
      count: view[6 - i],
    });
  }

  const sharingData = [];

  for (let i = 6; i >= 0; i--) {
    const pastDate = subDays(currentDate, i);
    const formattedDate = format(pastDate, 'MM.dd');

    sharingData.push({
      date: formattedDate,
      count: sharing[6 - i],
    });
  }

  const contactData = [];

  for (let i = 6; i >= 0; i--) {
    const pastDate = subDays(currentDate, i);
    const formattedDate = format(pastDate, 'MM.dd');

    contactData.push({
      date: formattedDate,
      count: contact_us_log[6 - i],
    });
  }

  const downloadData = [];

  for (let i = 6; i >= 0; i--) {
    const pastDate = subDays(currentDate, i);
    const formattedDate = format(pastDate, 'MM.dd');

    downloadData.push({
      date: formattedDate,
      count: download_log[6 - i],
    });
  }
  console.log(contactData);
  return (
    <div className="grid grid-cols-2 gap-5 mt-5">
      <CountBar data={viewData} title="주간 조회수" />
      <CountBar data={sharingData} title="주간 공유 횟수" />
      <CountBar data={contactData} title="주간 연락 건수" />
      <CountBar data={downloadData} title="주간 다운로드 횟수" />
    </div>
  );
}
