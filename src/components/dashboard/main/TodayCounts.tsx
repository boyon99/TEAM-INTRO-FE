import Count from './Count';
import { format } from 'date-fns';

export default function TodayCounts({ data }: { data: DashboardData }) {
  const { view, sharing, contact_us_log, download_log } = data;
  const date = new Date();
  const formattedDate = format(date, 'yyyy.MM.dd HH:mm');

  return (
    <div className="grid grid-cols-4 mt-5 gap-x-5">
      <Count today={view[6]} variation={view[6] - view[5]} title={'조회수'} date={formattedDate} />
      <Count today={sharing[6]} variation={sharing[6] - sharing[5]} title={'공유 횟수'} date={formattedDate} />
      <Count
        today={contact_us_log[6]}
        variation={contact_us_log[6] - contact_us_log[5]}
        title={'연락 건수'}
        date={formattedDate}
      />
      <Count
        today={download_log[6]}
        variation={download_log[6] - download_log[5]}
        title={'다운로드 횟수'}
        date={formattedDate}
      />
    </div>
  );
}
