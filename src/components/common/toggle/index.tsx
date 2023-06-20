import { ToggleWidgetProps } from '@/interfaces/toggle';
import useStore from '@/store';
import { useState } from 'react';

// toggle handler 안에 텍스트 있는 버튼
// builder 공개 숨김 토글
export function ToggleInText({ classname }: { classname: string }) {
  const [toggle, setToggle] = useState(true);
  const toggleAnimation = 'transform translate-x-[40px]';

  return (
    <div className={'flex w-[90px] h-[32px] bg-primary-500 rounded-full text-[14px] ' + classname}>
      {/* Toggle Container */}
      <div
        className="w-[90px] h-[32px] bg-primary-500 rounded-full p-[3px] cursor-pointer flex relative"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {/* toggle false일 때 */}
        {toggle ? (
          <span className="absolute text-white left-[52px] top-[5px]">숨김</span>
        ) : (
          <span className="absolute text-white left-[10px] top-[5px]">공개</span>
        )}

        {/* Toggle true일 때*/}
        <div
          className={
            'bg-white h-[26px] w-[44px] rounded-full shadow-md transform duration-300 ease-in-out relative' +
            (toggle ? null : toggleAnimation)
          }
        >
          {toggle ? (
            <span className="pl-[9px] text-primary-500 absolute top-[3px]">공개</span>
          ) : (
            <span className="pl-[11px] text-primary-500 absolute top-[3px]">숨김</span>
          )}
        </div>
      </div>
    </div>
  );
}

// toggle 텍스트 없는 버튼
// builder 위젯 토글
export function ToggleSmall({ buttonName }: { buttonName: string }) {
  // store에서 위젯 목록과 토글 상태 가져오기
  const { widgets, setToggle } = useStore();
  // 위젯 목록에서 현재 위젯을 찾아서 가져옴
  const widget = widgets.find((widget) => widget.name === buttonName);
  // 토글 애니메이션
  const toggleAnimation = 'transform translate-x-[11px]';

  return (
    <button
      className={
        'flex w-[25px] h-[14px] rounded-full relative ' +
        (widget?.toggle ? 'bg-primary-500' : 'bg-GrayScalePrimary-200')
      }
    >
      {/* Toggle Container */}
      <div
        className={
          'w-[100%] h-[100%] rounded-full p-[1px] cursor-pointer flex ' +
          (widget?.toggle ? 'bg-primary-500' : 'bg-GrayScalePrimary-200')
        }
        onClick={() => {
          setToggle(widget!.name);
        }}
      >
        {/* Toggle controller */}
        <div
          className={
            'bg-white h-[11px] w-[11px] rounded-full shadow-md transform duration-300 ease-in-out' +
            (widget?.toggle ? null : toggleAnimation)
          }
        ></div>
      </div>
    </button>
  );
}

// toggle 텍스트 있는 버튼
// builder 순서 변경 토글
export function ToggleLarge({ toggleText }: { toggleText: string }) {
  // store에서 순서 변경 토글 상태 가져오기
  const { isChangeOederToggle, setIsChangeOederToggle } = useStore();
  // toggle 애니메이션
  const toggleAnimation = 'transform translate-x-[15px]';

  return (
    <div className="flex">
      <div
        className={
          'flex w-[36px] h-[21px] rounded-full mt-[2px] relative pb-[1px] ' +
          (isChangeOederToggle ? 'bg-primary-500' : 'bg-GrayScalePrimary-200')
        }
      >
        {/* Toggle Container */}
        <div
          className={
            'w-[100%] h-[100%] rounded-full p-[2px] cursor-pointer flex ' +
            (isChangeOederToggle ? 'bg-primary-500' : 'bg-GrayScalePrimary-200')
          }
          onClick={() => {
            setIsChangeOederToggle(!isChangeOederToggle);
          }}
        >
          {/* Toggle controller */}
          <div
            className={
              'bg-white h-[16px] w-[16px] rounded-full shadow-md transform duration-300 ease-in-out' +
              (isChangeOederToggle ? null : toggleAnimation)
            }
          ></div>
        </div>
      </div>
      <p className="ml-[8px]">
        {toggleText}
        {isChangeOederToggle ? ' ON' : ' OFF'}
      </p>
    </div>
  );
}

// widget 페이지에서 사용하는 토클
export function ToggleWidget({ toggle, setToggle, toggleText }: ToggleWidgetProps) {
  // 토글 애니메이션
  const toggleAnimation = 'transform translate-x-[16px]';

  return (
    <div className="flex">
      <button
        className={
          'flex w-[37px] h-[20px] rounded-full relative ' + (toggle ? 'bg-primary-500' : 'bg-GrayScalePrimary-200')
        }
      >
        {/* Toggle Container */}
        <div
          className={
            'w-[100%] h-[100%] rounded-full p-[1px] cursor-pointer flex ' +
            (toggle ? 'bg-primary-500' : 'bg-GrayScalePrimary-200')
          }
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* Toggle controller */}
          <div
            className={
              'bg-white h-[16px] w-[16px] rounded-full shadow-md transform duration-300 ease-in-out ml-[1px] ' +
              (toggle ? null : toggleAnimation)
            }
          ></div>
        </div>
      </button>
      <p className="ml-[8px] translate-y-[-1px]">{toggleText}</p>
    </div>
  );
}
