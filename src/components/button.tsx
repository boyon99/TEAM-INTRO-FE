import { cls } from "@/utiles/utile";


interface ButtonProps {
    size?: "small" | "medium" | "large" | "xlarge";
    text: string;
    disable: boolean;
  }
  
export default function Button({
  size,
  text,
  disable
}:ButtonProps) {
  return (
    <>
    {size === "medium" ? (
        <button
                className={cls(
                "absolute w-[128px] h-[48px] left-[calc(50%-128px/2+68px)] bottom-[44px] rounded-lg text-GrayScaleNeutral-100 font-bold text-lg/[100%]",
                disable ? "bg-primary-500" : "bg-[#fffff] text-GrayScalePrimary-600 border border-solid border-[#000000]"
                )}
            >
                {text}
           </button>
    ): null}
    {size === "small" ? (
        // <div className="p-[8px_16px] gap-[10px]">
            <button
                className={cls(
                "w-[100px] h-[46px] rounded-lg text-GrayScaleNeutral-100 font-bold text-sm",
                disable ? "bg-GrayScalePrimary-300" : "bg-primary-500"
                )}
            >
                {text}
           </button>
        // </div>
       
    ): null}
    {size === "large" ? (
        <button
      className={cls(
        "absolute w-[140px] h-[46px] right-0 top-[calc(50%-46px/2)] rounded-lg text-GrayScaleNeutral-100 font-bold text-sm",
        disable ? "bg-GrayScalePrimary-300" : "bg-primary-500"
      )}
    >
      {text}
    </button>
    ): null}
    {size === "xlarge" ? (
            <button
                className={cls(
                "absolute w-[180px] h-[46px] right-0 top-0 rounded-lg text-GrayScaleNeutral-100 font-bold text-sm",
                disable ? "bg-GrayScalePrimary-300" : "bg-primary-500"
                )}
            >
                {text}
           </button>
    ): null}
    </>
  );
}