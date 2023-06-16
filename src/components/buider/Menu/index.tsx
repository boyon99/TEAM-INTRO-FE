import React from "react";
import { useRouter } from "next/router";
import { MenuProps } from "@/types/builder";
import { ToggleNotText } from "@/components/common/toggle";

export default function Menu({ routerName, buttonName, isToggle }: MenuProps) {
  const router = useRouter();

  return (
    <div className="relative">
      <button
        onClick={() => router.push(routerName)}
        className={
          "w-[264px] h-[46px] text-[16px] text-[500] text-left  px-[16px] mb-[6px] hover:bg-GrayScalePrimary-100 hover:border-r-[4px] hover:border-primary-500 " +
          (isToggle ? "indent-[35px]" : "")
        }
      >
        {buttonName}
      </button>
      <div className="absolute top-[16px] left-[15px]">
        {isToggle ? <ToggleNotText></ToggleNotText> : <></>}
      </div>
    </div>
  );
}
