import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    label?: string;
    name: string;
    size?: "small" | "large";
    type: string;
    register?: UseFormRegisterReturn;
    required?: boolean;
    onClick?: () => void;
  }
  
  export default function Input({
    register,
    required,
    label,
    size,
    type,
    onClick,
  }: InputProps) {
    return (
      <>
        {size === "large" && type === "login_id" ? (
        <div className="flex flex-col items-start gap-[8px] p-0 justify-center w-[360px] h-[70px]">
            <span className="w-[50px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800">{label}</span>
            <input type="text" {...register} required={required} className="w-[360px] h-[43px] px-3 py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
        {size === "large" && type === "password" ? (
        <div className="flex flex-col items-start gap-[8px] p-0 justify-center mt-5">
            <span className="w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800">{label}</span>
            <input type="password" {...register} required={required} className="w-[360px] h-[43px] px-3 py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
        {size === "small" && type === "register_id" ? (
        <div>
            <span className="w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800 mr-[88px]">{label}</span>
            <input type="text" {...register} required={required} className="w-[260px] h-[43px] px- py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
        {size === "small" && type === "register_email" ? (
        <div>
            <span className="w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800 mr-[88px]">{label}</span>
            <input type="text" {...register} required={required} className="w-[260px] h-[43px] px- py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
        {size === "small" && type === "register_password" ? (
        <div className="">
            <span className="w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800 mr-[25.5px]">{label}</span>
            <input type="password" {...register} required={required} className="w-[260px] h-[43px] px-3 py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
        {size === "large" && type === "register_password" ? (
        <div className="">
            <span className="w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800 mr-[71.93px]">{label}</span>
            <input type="password" {...register} required={required} className="w-[356px] h-[43px] px-3 py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
        {size === "large" && type === "register_password_check" ? (
        <div className="">
            <span className="w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800 mr-[36px]">{label}</span>
            <input type="password" {...register} required={required} className="w-[356px] h-[43px] px-3 py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
        {type === "login_checkbox" ? (
                <div className="relative">
                 <input type="checkbox" className="w-[16px] h-[16px] mt-1" onClick={onClick}/>
                 <span className="absolute w-[200px] left-[24px] top-[5px] font-medium text-[13px]/[100%] text-GrayScalePrimary-900">{label}</span>
               </div>
        ): null}
        {type === "register_checkbox" ? (
                <div className="relative w-[131px] h-[24px]">
                 <input type="checkbox" className="w-[16px] h-[16px] mt-1" onClick={onClick}/>
                 <span className="absolute w-[110px] h-[15px] left-[24px] top-[5px] font-medium text-[14px]/[100%] text-GrayScalePrimary-700">전체동의</span>
               </div>
        ): null}
       {size === "large" && type === "snsregister_email" ? (
        <div>
            <span className="w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800 mr-[95px]">{label}</span>
            <input type="text" {...register} required={required} className="w-[358px] h-[43px] px- py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
       {size === "large" && type === "findid_email" ? (
        <div>
            <span className="w-[51px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800 mr-[20px]">{label}</span>
            <input type="text" {...register} required={required} className="w-[324px] h-[43px] px- py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
       {size === "large" && type === "findid_bznum" ? (
        <div>
            <span className="w-[106px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800 mr-[10px]">{label}</span>
            <input type="text" {...register} required={required} className="w-[270px] h-[43px] px- py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
        </div>
        
        ) : null}
      </>
    );
  }