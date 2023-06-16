import React from "react";
import { useRouter } from "next/router";
import { MenuProps } from "@/interfaces/builder";
import { ToggleNotText } from "@/components/common/toggle";
import useStore from "@/store";

// 빌더 Leftpanel 패널 메뉴
export function MenuA({ routerName, buttonName }: MenuProps) {
  const router = useRouter();

  return (
    <div className={"relative"}>
      <button
        onClick={() => router.push(routerName)}
        className={
          "w-[264px] h-[46px] text-[16px] text-[500] text-left  px-[16px] mb-[6px] hover:bg-GrayScalePrimary-100 hover:border-r-[4px] hover:border-primary-500 "
        }
      >
        {buttonName}
      </button>
    </div>
  );
}

// 빌더 Leftpanel 위젯 메뉴
export function MenuB({ routerName, buttonName, isActivate }: MenuProps) {
  const router = useRouter();
  const { widgets, isChangeOederToggle } = useStore();
  const widget = widgets.find((widget) => widget.name === buttonName);

  return (
    <div
      className={
        "relative hover:text-primary-500 w-[264px] h-[46px] text-[16px] text-[500] text-left  px-[16px] mb-[6px] " +
        (widget?.toggle
          ? isActivate
            ? "border-primary-500 bg-GrayScalePrimary-100"
            : "border-r-[4px] border-primary-500 bg-GrayScalePrimary-100"
          : "")
      }
    >
      <button
        onClick={() =>
          // router.push(routerName)
          console.log("click")
        }
        className={"w-[200px] h-[100%] text-left"}
      >
        {isActivate ? (
          <p className="indent-[35px]">{buttonName}</p>
        ) : (
          <p className="">{buttonName}</p>
        )}
      </button>
      <div className="absolute top-[16px] left-[15px]">
        {isActivate ? (
          <ToggleNotText buttonName={buttonName}></ToggleNotText>
        ) : (
          <></>
        )}
      </div>
      {isActivate && isChangeOederToggle ? (
        <div>
          <img
            src="/handler.png"
            className="w-[24px] h-[24px] absolute top-[11px] right-[16px]"
            alt="hanlder-img"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
