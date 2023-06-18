import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';

interface CountProps {
  title: string;
  num1: number;
  num2: number;
  date: string;
}

export default function Count({ title, num1, num2, date }: CountProps) {
  return (
    <div className='h-[200px] bg-white border border-GrayScalePrimary-150 rounded-xl'>
      <h3 className='h-14 mb-4 leading-[56px] text-center border-b border-b-GrayScalePrimary-150 font-bold'>
        {title}
      </h3>
      <div className='-space-y-3'>
        <h2 className='font-bold text-center text-[50px]'>{num1}</h2>

        {num2 > 0 ? (
          <div className='flex items-center justify-center'>
            <ArrowUp />
            <h4 className='text-error-500'>{num2}</h4>
          </div>
        ) : (
          <div className='flex items-center justify-center text-success-500'>
            <ArrowDown />
            <h4>{-num2}</h4>
          </div>
        )}
      </div>
      <h4 className='text-center text-GrayScalePrimary-350 text-[11px] mt-3'>
        {date}
      </h4>
    </div>
  );
}
