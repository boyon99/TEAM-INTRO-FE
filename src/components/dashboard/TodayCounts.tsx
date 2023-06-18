import Count from './Count';

export default function TodayCounts() {
  const data = [
    { title: '조회수', num1: 10, num2: 8, date: '2023.06.10 15:52 현재' },
    { title: '공유 횟수', num1: 10, num2: -8, date: '2023.06.10 15:52 현재' },
    { title: '연락 건수', num1: 10, num2: 8, date: '2023.06.10 15:52 현재' },
    {
      title: '다운로드 횟수',
      num1: 10,
      num2: -8,
      date: '2023.06.10 15:52 현재',
    },
  ];

  return (
    <div className='grid grid-cols-4 mt-5 gap-x-5'>
      {data.map((el) => (
        <Count {...el} />
      ))}
    </div>
  );
}
