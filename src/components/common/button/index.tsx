import { BeforeButtonProps, PrimaryButtonProps } from "@/interfaces/button";
import { useRouter } from "next/router";

// 이전으로 되돌아가는 버튼
export function BeforeButtonSmall({
  beforePageName,
  nowPageName,
}: BeforeButtonProps) {
  const router = useRouter();
  const backPage = () => {
    router.back();
  };
  return (
    <div className="flex ml-[28px] mt-[12px]">
      <button
        className="w-[24px] h-[24px] bg-GrayScalePrimary-200 rounded-full"
        onClick={() => {
          backPage();
        }}
      >
        <img
          src="/east.png"
          alt="east"
          className="w-[12px] h-[auto] translate-x-[5px]"
        />
      </button>
      <p className="text-GrayScalePrimary-500 font-bold text-[14px] ml-[16px] translate-y-[3px]">
        {beforePageName}
        &#160;&#8739;&#160;
        {nowPageName}
      </p>
    </div>
  );
}

// 이전으로 되돌아가는 버튼
export function BeforeButtonLarge({
  nowPageName,
  classname,
}: BeforeButtonProps) {
  const router = useRouter();
  const backPage = () => {
    router.back();
  };
  return (
    <button
      className={"flex h-[24px] " + classname}
      onClick={() => {
        backPage();
      }}
    >
      <img
        src="/arrow_back.png"
        alt="arrow_back"
        className="w-[12px] h-[auto]"
      />
      <p className="font-[500] text-[18px] ml-[8px] translate-y-[-2px]">
        {nowPageName}
      </p>
    </button>
  );
}

// 기본 버튼
export function PrimaryButton({
  color,
  text,
  onClick,
  classname,
}: PrimaryButtonProps) {
  return (
    <button
      className={
        "bg-primary-" +
        color +
        "  text-white text-[14px] rounded-[6px] " +
        classname
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}
