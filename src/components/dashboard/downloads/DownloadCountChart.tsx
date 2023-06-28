import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CustomTooltip from '../CustomTooltip';

export default function DownloadCountChart() {
  const data = [
    {
      name: '06.06',
      미디어킷: 10,
      회사소개서: 30,
    },
    {
      name: '06.07',
      미디어킷: 30,
      회사소개서: 40,
    },
    {
      name: '06.08',
      미디어킷: 20,
      회사소개서: 20,
    },
    {
      name: '06.09',
      미디어킷: 40,
      회사소개서: 30,
    },
    {
      name: '06.10',
      미디어킷: 30,
      회사소개서: 10,
    },
    {
      name: '06.11',
      미디어킷: 10,
      회사소개서: 20,
    },
    {
      name: '06.12',
      미디어킷: 20,
      회사소개서: 10,
    },
  ];

  return (
    <div className="w-[700px]">
      <ResponsiveContainer width="100%" height={148} className="mt-3">
        <LineChart data={data}>
          <XAxis
            tickLine={false}
            tick={{ fontSize: '12px', fill: '#6E6D86' }}
            tickMargin={13}
            axisLine={{ stroke: '#EAEAEE', strokeWidth: 1 }}
            dataKey="name"
            padding={{ left: 30, right: 30 }}
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: '12px', fill: '#6E6D86' }} tickCount={5} />
          <CartesianGrid strokeDasharray="3 3" stroke="#EAEAEE" vertical={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            align="right"
            layout="vertical"
            verticalAlign="top"
            iconType="square"
            iconSize={8}
            wrapperStyle={{ fontSize: '10px' }}
          />
          <Line type="linear" dataKey="미디어킷" stroke="#E77373" strokeWidth={2} />
          <Line type="linear" dataKey="회사소개서" stroke="#7673E7" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
