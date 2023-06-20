import { ToggleWidgetProps } from '@/interfaces/toggle';
import useStore from '@/store';
import { useState } from 'react';

type CheckboxProps = {
  checked: boolean | undefined;
  handleClick: () => void;
};

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

export function Checkbox({ checked, handleClick }: CheckboxProps) {
  if (checked) {
    return (
      <button onClick={handleClick}>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_813_9634" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
            <rect y="0.675781" width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_813_9634)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.61538 18.6758C3.15513 18.6758 2.77083 18.5216 2.4625 18.2133C2.15417 17.9049 2 17.5207 2 17.0604V4.29116C2 3.83091 2.15417 3.44661 2.4625 3.13828C2.77083 2.82995 3.15513 2.67578 3.61538 2.67578H16.3846C16.8449 2.67578 17.2292 2.82995 17.5375 3.13828C17.8458 3.44661 18 3.83091 18 4.29116V17.0604C18 17.5207 17.8458 17.9049 17.5375 18.2133C17.2292 18.5216 16.8449 18.6758 16.3846 18.6758H3.61538ZM16.3846 17.6758H3.61538C3.46154 17.6758 3.32052 17.6117 3.1923 17.4835C3.0641 17.3553 3 17.2142 3 17.0604V4.29116C3 4.13732 3.0641 3.9963 3.1923 3.86808C3.32052 3.73988 3.46154 3.67578 3.61538 3.67578H16.3846C16.5385 3.67578 16.6795 3.73988 16.8077 3.86808C16.9359 3.9963 17 4.13732 17 4.29116V17.0604C17 17.2142 16.9359 17.3553 16.8077 17.4835C16.6795 17.6117 16.5385 17.6758 16.3846 17.6758Z"
              fill="#4B48DF"
            />
            <path
              d="M3.61538 17.6758H16.3846C16.5385 17.6758 16.6795 17.6117 16.8077 17.4835C16.9359 17.3553 17 17.2142 17 17.0604V4.29116C17 4.13732 16.9359 3.9963 16.8077 3.86808C16.6795 3.73988 16.5385 3.67578 16.3846 3.67578H3.61538C3.46154 3.67578 3.32052 3.73988 3.1923 3.86808C3.0641 3.9963 3 4.13732 3 4.29116V17.0604C3 17.2142 3.0641 17.3553 3.1923 17.4835C3.32052 17.6117 3.46154 17.6758 3.61538 17.6758Z"
              fill="#4B48DF"
            />
            <path
              d="M5.86732 10.6739L8.36347 13.17L13.6981 7.83541C13.8045 7.72899 13.9224 7.67578 14.0519 7.67578C14.1814 7.67578 14.2994 7.72899 14.4058 7.83541C14.5122 7.94181 14.5622 8.06296 14.5558 8.19886C14.5494 8.33476 14.4994 8.4495 14.4058 8.54308L8.92885 14.02C8.76732 14.1816 8.57886 14.2623 8.36347 14.2623C8.14809 14.2623 7.95963 14.1816 7.7981 14.02L5.15963 11.3816C5.05321 11.2751 5 11.1572 5 11.0277C5 10.8982 5.05321 10.7803 5.15963 10.6739C5.26604 10.5674 5.3872 10.5174 5.5231 10.5239C5.659 10.5303 5.77374 10.5803 5.86732 10.6739Z"
              fill="#F8F8FA"
            />
          </g>
        </svg>
      </button>
    );
  }

  return (
    <button onClick={handleClick}>
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_782_9614" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
          <rect width="20" height="19" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_782_9614)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.61538 18C3.15513 18 2.77083 17.8458 2.4625 17.5375C2.15417 17.2292 2 16.8449 2 16.3846V3.61537C2 3.15512 2.15417 2.77083 2.4625 2.4625C2.77083 2.15417 3.15513 2 3.61538 2H16.3846C16.8449 2 17.2292 2.15417 17.5375 2.4625C17.8458 2.77083 18 3.15512 18 3.61537V16.3846C18 16.8449 17.8458 17.2292 17.5375 17.5375C17.2292 17.8458 16.8449 18 16.3846 18H3.61538ZM16.3846 17H3.61538C3.46154 17 3.32052 16.9359 3.1923 16.8077C3.0641 16.6795 3 16.5385 3 16.3846V3.61537C3 3.46154 3.0641 3.32052 3.1923 3.1923C3.32052 3.0641 3.46154 3 3.61538 3H16.3846C16.5385 3 16.6795 3.0641 16.8077 3.1923C16.9359 3.32052 17 3.46154 17 3.61537V16.3846C17 16.5385 16.9359 16.6795 16.8077 16.8077C16.6795 16.9359 16.5385 17 16.3846 17Z"
            fill="#CFCED7"
          />
          <path
            d="M8.36347 12.4942L5.86732 9.99808C5.77374 9.90449 5.659 9.85449 5.5231 9.84808C5.3872 9.84166 5.26604 9.89166 5.15963 9.99808C5.05321 10.1045 5 10.2224 5 10.3519C5 10.4814 5.05321 10.5994 5.15963 10.7058L7.7981 13.3442C7.95963 13.5058 8.14809 13.5866 8.36347 13.5866C8.57886 13.5866 8.76732 13.5058 8.92885 13.3442L14.4058 7.8673C14.4994 7.77372 14.5494 7.65898 14.5558 7.52308C14.5622 7.38718 14.5122 7.26603 14.4058 7.15963C14.2994 7.05321 14.1814 7 14.0519 7C13.9224 7 13.8045 7.05321 13.6981 7.15963L8.36347 12.4942Z"
            fill="#F8F8FA"
          />
        </g>
      </svg>
    </button>
  );
}
