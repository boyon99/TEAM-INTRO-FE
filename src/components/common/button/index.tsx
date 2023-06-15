import { BeforeButtonProps } from "@/interfaces/button";
import { useRouter } from "next/router";

// 이전으로 되돌아가는 버튼
export function BeforeButton({ beforePage, nowPage }: BeforeButtonProps) {
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
        {beforePage}
        &#160;&#8739;&#160;
        {nowPage}
      </p>
    </div>
  );
}
