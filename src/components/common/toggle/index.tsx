import { useState } from "react";

// toggle button
export function Toggle() {
  const [toggle, setToggle] = useState(true);
  const toggleAnimation = "transform translate-x-[36px]";

  return (
    <div className="flex w-[90px] h-[32px] bg-primary-500 rounded-full text-[14px]">
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
          <span className="absolute text-white left-[8px] top-[5px]">공개</span>
        )}

        {/* Toggle true일 때*/}
        <div
          className={
            "bg-white h-[26px] w-[44px] pt-[2px] rounded-full shadow-md transform duration-300 ease-in-out" +
            (toggle ? null : toggleAnimation)
          }
        >
          {toggle ? (
            <span className="pl-[9px] text-primary-500">공개</span>
          ) : (
            <span className="pl-[11px] text-primary-500">숨김</span>
          )}
        </div>
      </div>
    </div>
  );
}
