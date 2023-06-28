import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';

type CountProps = {
  title: string;
  today: number;
  variation: number;
  date: string;
};

export default function Count({ title, today, variation, date }: CountProps) {
  return (
    <div className="h-[200px] bg-white border border-GrayScalePrimary-150 rounded-xl">
      <h3 className="h-14 mb-4 leading-[56px] text-center border-b border-b-GrayScalePrimary-150 font-bold">{title}</h3>
      <div className="-space-y-3">
        <h2 className="font-bold text-center text-[50px]">{today}</h2>

        {variation > 0 && (
          <div className="flex items-center justify-center">
            <ArrowUp />
            <h4 className="text-error-500">{variation}</h4>
          </div>
        )}
        {variation < 0 && (
          <div className="flex items-center justify-center text-success-500">
            <ArrowDown />
            <h4>{-variation}</h4>
          </div>
        )}
        {variation === 0 && <h4 className="text-center text-GrayScaleNeutral-600">{variation}</h4>}
      </div>
      <h4 className="text-center text-GrayScalePrimary-350 text-[11px] mt-3">{date}</h4>
    </div>
  );
}
