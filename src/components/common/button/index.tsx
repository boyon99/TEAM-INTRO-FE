import { BeforeButtonProps, PrimaryButtonProps } from '@/interfaces/button';
import { useRouter } from 'next/router';

// 이전으로 되돌아가는 버튼
// leftpanel
export function BeforeButtonSmall({ pageName }: BeforeButtonProps) {
  const router = useRouter();
  const backPage = () => {
    router.back();
  };
  return (
    <div className="flex mt-[12px]">
      <button
        className="w-[24px] h-[24px] bg-GrayScalePrimary-100 rounded-full"
        onClick={() => {
          backPage();
        }}
      >
        <img src="/east.png" alt="east" className="w-[12px] h-[auto] translate-x-[5px]" />
      </button>
      <p className="text-GrayScalePrimary-500 font-bold text-[14px] ml-[16px] translate-y-[2px]">{pageName}</p>
    </div>
  );
}

// 이전으로 되돌아가는 버튼
// 상단 메뉴바
export function BeforeButtonLarge({ pageName, classname }: BeforeButtonProps) {
  const router = useRouter();
  const backPage = () => {
    router.back();
  };
  return (
    <button
      className={'flex h-[24px] ' + classname}
      onClick={() => {
        backPage();
      }}
    >
      <img src="/arrow_back.png" alt="arrow_back" className="w-[12px] h-[auto]" />
      <p className="font-[500] text-[18px] ml-[8px] translate-y-[-2px]">{pageName}</p>
    </button>
  );
}

// 기본 버튼
// type: primary, wihte
export function PrimaryButton({ type, text, onClick, classname }: PrimaryButtonProps) {
  const color =
    type === 'primary'
      ? 'bg-primary-500 text-white border-primary-500'
      : 'bg-white text-primary-500 border-primary-500 text-primary-500';
  return (
    <button className={color + ' text-sm rounded-md border-2 ' + classname} onClick={onClick}>
      {text}
    </button>
  );
}
