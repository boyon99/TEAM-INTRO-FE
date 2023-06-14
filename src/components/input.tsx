import { cls } from "@/utiles/utile";
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
    name,
    onClick,
  }: InputProps) {
    return (
      <>
        {size === "large" ? (
        <div className={cls(name === "register_password" || name === "register_password_check" || name === "snsemail" || name === "findid_email" || name === "findbznum_email" || name === "findid_pass" || name === "findemail_pass" || name === "repass" || name === "old_repass" || name === "repass_check" || name === "my_biznum"? "" : "flex flex-col items-start gap-[8px] p-0 justify-center mb-5" )}>
            <span className={cls("w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800", name === "register_password" ? "mr-[71.93px]": "", name === "register_password_check"? "mr-[36px]": "", name === "snsemail" ?  "mr-[95px]":"", name === "findid_email" ? "mr-[20px]":"", name === "findbznum_email" ? "mr-[10px]" : "",
             name === "findid_pass" ? "mr-[36px]": "", name === "findemail_pass" ? "mr-[36px]": "",name === "repass" ? "mr-[62px]" : "", name === "old_repass" ? 'mr-[47px]':'', name === "repass_check" ? "mr-[26px]" : "", name === "my_biznum" ? "mr-[25px]": "")}>{label}</span>
            <input type={type} {...register} required className={cls("h-[43px] px-3 py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]",
             name === "findid_email" ? "w-[324px]" :name === "findbznum_email" ? "w-[270px]" :"w-[356px]")}/>
        </div>
        
        ) : null}
       
        {size === "small" ? (
        <div>
            <span className={cls("w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800", name === 'bznum' ? "mr-[25.5px]" : 'mr-[88px]' )}>{label}</span>
            <input type={type} {...register} required={required} className="w-[260px] h-[43px] px-3  py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
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
        {type === "alarm" ? (
                <div className="relative w-[131px] h-[24px]">
                 <input type="checkbox" className="w-[16px] h-[16px] mt-1" onClick={onClick}/>
                 <span className="absolute w-[200px] h-[15px] left-[24px] top-[5px] font-medium text-[14px]/[100%] text-GrayScalePrimary-700">이메일 알림을 받습니다.</span>
               </div>
        ): null}

       
      </>
    );
  }