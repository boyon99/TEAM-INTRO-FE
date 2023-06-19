import { cls } from "@/utils/utile";


interface ButtonProps {
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
    text: string;
    disable?: boolean;
    form?: any;
    type?: any;
    active?: boolean;
    [key: string]: any;
  }
  
export default function Button({
  size,
  text,
  disable,
  form,
  type,
  onClick,
  active,
}:ButtonProps) {
  return (
    <>
    {size === "medium" ? (
        <button
                className={cls(
                "w-[128px] h-[48px] left-[calc(50%-128px/2+68px)] bottom-[44px] rounded-lg text-GrayScaleNeutral-100 font-bold text-lg/[100%]",
                disable ? "bg-primary-500" : "bg-[#fffff] text-GrayScalePrimary-600 border border-solid border-[#000000]"
                )}
            >
                {text}
           </button>
    ): null}
    {size === "xsmall" ? (
        <button
                type={type}
                onClick={onClick}
                className={cls(
                "w-[88px] h-[43px] ml-[8px] rounded-lg text-GrayScaleNeutral-100 font-medium text-sm/[100%] ",
                disable ? "bg-primary-500" : active ? "bg-[#c1c0cc] cursor-not-allowed":"bg-primary-150 text-[#fff]"
                )}
            >
                {text}
           </button>
    ): null}
    {size === "small" ? (
            <button
               
                className={cls(
                "w-[100px] h-[46px] rounded-lg text-GrayScaleNeutral-100 font-bold text-sm",
                disable ? "bg-GrayScalePrimary-300" : "bg-primary-500"
                )}
            >
                {text}
           </button>
    ): null}
    {size === "large" ? (
        <button
      className={cls(
        "w-[140px] h-[46px] right-0 top-[calc(50%-46px/2)] rounded-lg text-GrayScaleNeutral-100 font-bold text-sm",
        disable ? "bg-GrayScalePrimary-300" : "bg-primary-500"
      )}
    >
      {text}
    </button>
    ): null}
    {size === "xlarge" ? (
            <button
                form={form}
                className={cls(
                "w-[180px] h-[46px] right-0 top-0 rounded-lg text-GrayScaleNeutral-100 font-bold text-sm",
                disable ? "bg-primary-500" : active ? "bg-[#c1c0cc] cursor-not-allowed":"bg-primary-150 text-[#fff]"
                )}
            >
                {text}
           </button>
    ): null}
     
    </>
  );
}