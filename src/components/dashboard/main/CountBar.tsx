import {
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type CountBarProps = {
  title: string;
  data: {
    date: string;
    count: number;
  }[];
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p>{label}</p>
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function CountBar({ title, data }: CountBarProps) {
  return (
    <div className='h-[280px] bg-white rounded-xl border border-GrayScalePrimary-150'>
      <h3 className='h-14 border-b border-b-GrayScalePrimary-150 font-bold leading-[56px] text-center'>
        {title}
      </h3>
      <ResponsiveContainer width='90%' height={169} className='ml-4 mt-9'>
        <BarChart data={data}>
          <XAxis
            dataKey='date'
            axisLine={false}
            tickLine={false}
            tickMargin={12}
            fontSize={12}
            tick={{ fill: '#6E6D86' }}
          ></XAxis>
          <YAxis
            dataKey='count'
            axisLine={false}
            tickLine={false}
            tickCount={4}
            tickMargin={25}
            fontSize={12}
            tick={{ fill: '#6E6D86' }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'transparent' }}
          />
          <Bar dataKey='count' fill='#A09FEE' radius={[10, 10, 0, 0]}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
