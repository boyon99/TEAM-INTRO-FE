import { ReactNode } from 'react';

type TitleProps = {
  title: string;
  children?: ReactNode;
  style?: string;
};

export default function Title({ title, children, style }: TitleProps) {
  return (
    <div className={`border border-GrayScalePrimary-150 rounded-xl h-[66px] leading-[66px] bg-white ${style}`}>
      <h1 className="font-bold text-[22px] text-[#121115] absolute left-1/2 -translate-x-1/2">{title}</h1>
      {children}
    </div>
  );
}
