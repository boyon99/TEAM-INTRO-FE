import React from "react";
import { useRouter } from "next/router";
import { MenuProps } from "@/interfaces/builder";
import { ToggleSmall } from "@/components/common/toggle";
import useStore from "@/store";

// 빌더 Leftpanel 패널 메뉴
// 테마 뱐경, 회사 정보 수정, 사이트 정보 수정
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
// 위젯 토글
export function MenuB({ routerName, buttonName, isEssential }: MenuProps) {
  const router = useRouter();
  // 위젯 목록과 순서변경 토글 상태를 store에서 가져옴
  const { widgets, isChangeOederToggle } = useStore();
  // 위젯 목록에서 현재 위젯을 찾아서 가져옴
  const widget = widgets.find((widget) => widget.name === buttonName);

  return (
    <div
      className={
        "relative hover:text-primary-500 w-[264px] h-[46px] text-[16px] text-[500] text-left  px-[16px] mb-[6px] " +
        // 사용중인 위젯인 경우
        (widget?.toggle
          ? isEssential
            ? // 필수 위젯인 경우
              "border-r-[4px] border-primary-500 bg-GrayScalePrimary-100"
            : // 필수 위젯이 아니지만, 현재 사용중인 경우
              "border-primary-500 bg-GrayScalePrimary-100"
          : "")
      }
    >
      {/* 하위 페이지로 이동 */}
      <button
        onClick={() => {
          router.push(routerName);
        }}
        className={"w-[200px] h-[100%] text-left"}
      >
        {isEssential ? (
          <p className="">{buttonName}</p>
        ) : (
          <p className="indent-[35px]">{buttonName}</p>
        )}
      </button>
      <div className="absolute top-[16px] left-[15px]">
        {isEssential ? (
          <></>
        ) : (
          // 해당 위젯을 사용하는지 알려주는 토글
          <ToggleSmall buttonName={buttonName}></ToggleSmall>
        )}
      </div>
      {/* 필수 위젯의 경우 순서 변경이 불가능하며, 순서 변경 토글이 활성화 되는 경우 핸들러 활성화 */}
      {!isEssential && isChangeOederToggle ? (
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
