import CountBar from './CountBar';

export default function WeeklyCounts() {
  const data = [
    {
      date: '06.06',
      count: 10,
    },
    {
      date: '06.07',
      count: 10,
    },
    {
      date: '06.08',
      count: 10,
    },
    {
      date: '06.09',
      count: 10,
    },
    {
      date: '06.10',
      count: 10,
    },
  ];

  return (
    <div className='grid grid-cols-2 gap-5 mt-5'>
      <CountBar data={data} title='주간 조회수' />
      <CountBar data={data} title='주간 공유 횟수' />
      <CountBar data={data} title='주간 연락 건수' />
      <CountBar data={data} title='주간 다운로드 횟수' />
    </div>
  );
}
