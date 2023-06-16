import useStore from "@/store";
import { useState } from "react";

// toggle 공개, 숨김 button
export function Toggle({ classname }: { classname: string }) {
  const [toggle, setToggle] = useState(true);
  const toggleAnimation = "transform translate-x-[40px]";

  return (
    <div
      className={
        "flex w-[90px] h-[32px] bg-primary-500 rounded-full text-[14px] " +
        classname
      }
    >
      {/* Toggle Container */}
      <div
        className="w-[90px] h-[32px] bg-primary-500 rounded-full p-[3px] cursor-pointer flex relative"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {/* toggle false일 때 */}
        {toggle ? (
          <span className="absolute text-white left-[52px] top-[5px]">
            숨김
          </span>
        ) : (
          <span className="absolute text-white left-[10px] top-[5px]">
            공개
          </span>
        )}

        {/* Toggle true일 때*/}
        <div
          className={
            "bg-white h-[26px] w-[44px] rounded-full shadow-md transform duration-300 ease-in-out relative" +
            (toggle ? null : toggleAnimation)
          }
        >
          {toggle ? (
            <span className="pl-[9px] text-primary-500 absolute top-[3px]">
              공개
            </span>
          ) : (
            <span className="pl-[11px] text-primary-500 absolute top-[3px]">
              숨김
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// toggle 텍스트 없는 버튼
export function ToggleNotText({ buttonName }: { buttonName: string }) {
  const { widgets, setToggle } = useStore();
  const widget = widgets.find((widget) => widget.name === buttonName);
  const toggleAnimation = "transform translate-x-[11px]";

  return (
    <button className={"flex w-[auto] h-[auto]"}>
      {/* Toggle Container */}
      <div
        className={
          "w-[25px] h-[14px] rounded-full cursor-pointer relative " +
          (widget?.toggle ? "bg-primary-500" : "bg-GrayScalePrimary-200")
        }
        onClick={() => {
          setToggle(widget!.name);
        }}
      >
        {/* Toggle contnet */}
        <div
          className={
            "bg-white h-[11px] w-[11px] rounded-full shadow-md transform duration-300 ease-in-out absolute top-[1px] left-[3px]" +
            (widget?.toggle ? null : toggleAnimation)
          }
        >
          {widget?.toggle ? (
            <span className=""></span>
          ) : (
            <span className=""></span>
          )}
        </div>
      </div>
    </button>
  );
}

// toggle 텍스트 있는 버튼
export function ToggleText({ toggleText }: { toggleText: string }) {
  const { isChangeOederToggle, setIsChangeOederToggle } = useStore();
  const toggleAnimation = "transform translate-x-[15px]";

  return (
    <div className="flex">
      <div
        className={
          "flex w-[36px] h-[21px] rounded-full mt-[2px] relative pb-[1px] " +
          (isChangeOederToggle ? "bg-primary-500" : "bg-GrayScalePrimary-200")
        }
      >
        {/* Toggle Container */}
        <div
          className={
            "w-[100%] h-[100%] rounded-full p-[2px] cursor-pointer flex " +
            (isChangeOederToggle ? "bg-primary-500" : "bg-GrayScalePrimary-200")
          }
          onClick={() => {
            setIsChangeOederToggle(!isChangeOederToggle);
          }}
        >
          {/* Toggle true일 때*/}
          <div
            className={
              "bg-white h-[16px] w-[16px] rounded-full shadow-md transform duration-300 ease-in-out" +
              (isChangeOederToggle ? null : toggleAnimation)
            }
          ></div>
        </div>
      </div>
      <p className="ml-[8px]">
        {toggleText}
        {isChangeOederToggle ? " ON" : " OFF"}
      </p>
    </div>
  );
}
