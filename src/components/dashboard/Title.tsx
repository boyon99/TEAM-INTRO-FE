import { ReactNode } from 'react';

type TitleProps = {
  title: string;
  children?: ReactNode;
};

export default function Title({ title, children }: TitleProps) {
  return (
    <div>
      <h1 className='border border-GrayScalePrimary-150 rounded-xl h-[66px] leading-[66px] text-center font-bold text-[22px] text-[#121115] bg-white'>
        {title}
      </h1>
      {children}
    </div>
  );
}
