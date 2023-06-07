import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    label: string;
    name: string;
    size?: "small" | "large";
    type: string;
    register: UseFormRegisterReturn;
    required?: boolean;
  }
  
  export default function Input({
    register,
    required,
    label,
    size,
    type,
  }: InputProps) {
    return (
      <div>
        {size === "large" && type === "email" ? (
        <div className="flex flex-col items-start gap-[8px] p-0 justify-center w-[360px] h-[70px]">
            <span className="w-[50px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800">{label}</span>
            <input type="text" {...register} required={required} className="w-[360px] h-[43px] px-3 py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
        {size === "large" && type === "password" ? (
        <div className="flex flex-col items-start gap-[8px] p-0 justify-center">
            <span className="w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800">{label}</span>
            <input type="password" {...register} required={required} className="w-[360px] h-[43px] px-3 py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
        {type === "checkbox" ? (
                <div className="relative w-[131px] h-[24px]">
                 <input type="checkbox" className="w-4 h-4 mt-1"/>
                 <span className="absolute w-[110px] h-[15px] left-[24px] top-[5px] font-medium text-[13px]/[100%] text-GrayScalePrimary-900">로그인 상태 유지</span>
               </div>
        ): null}
      </div>
    );
  }