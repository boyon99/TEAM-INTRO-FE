import Image from "next/image";




export default function Login() {
    return (
      <>
       <div className="absolute left-0 right-1/2 top-0 bottom-0 bg-primary-500">
         <div className="absolute left-[calc(50%_-_230px/2)] top-[26.44%] bottom-[45.91%]">
            <Image src="/emblem1.png" alt="emblem1" height={230} width={230}/>
         </div>
         <div className="absolute left-[calc(50%-150px/2)] top-[60%] bottom-[39.63%]">
             <Image src="/logo.png" alt="logo" height={16.27} width={150}/>
         </div>
         <div className="absolute w-[156px] h-[14px] left-[calc(50%-156px/2)] top-[calc(50%-14px/2+107px)]">
           <span className="font-sans font-normal text-xs/[100%] text-primary-100 text-center underline">질링스 홈페이지 바로가기&rarr;</span>
         </div>
         <div className="absolute w-[280px] h-[22px] left-[calc(50%-132px)] top-[calc(50%+330px)]">
           <span className="font-sans font-bold text-[20px]/[100%] text-primary-100 text-center">회사소개페이지 제작 PLUG-IN</span>
         </div>
       </div>
       <div className="absolute left-[50.16%] right-[-0.16%] top-0 bottom-0 rounded">
        <div className="absolute w-[360px] h-[427px] left-[calc(50%-360px/2)] top-[calc(50%-427px/2+0.5px)]">
            <span className="align-top not-italic text-GrayScalePrimary-800 font-black text-[27px]/[100%] absolute w-[85px] h-[32px] left-[137.5px] top-[2px] tracking-[0.03em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">로그인</span>
           <div className="flex flex-col p-0 gap-[30px] absolute w-[360px] h-[359px] left-0 top-[66px]">
              <div className="flex flex-col items-start gap-[8px] p-0 justify-center w-[360px] h-[70px]">
                <span className="w-[50px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800">아이디</span>
                <input type="text" className="w-[360px] h-[43px] px-3 py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
              </div>
              <div className="flex flex-col items-start gap-[8px] p-0 justify-center">
                <span className="w-[64px] h-[16px] font-bold text-[16px]/[100%] text-GrayScalePrimary-800">비밀번호</span>
                <input type="text" className="w-[360px] h-[43px] px-3 py-2 box-border border-solid border border-GrayScalePrimary-250 rounded-lg focus:border-primary-500 placeholder-GrayScalePrimary-500 focus:outline-none focus:ring-primary-500 focus:border-[2px]"/>
              </div>
              <div className="relative w-[131px] h-[24px]">
                <input type="checkbox" className="w-4 h-4 mt-1"/>
                <span className="absolute w-[110px] h-[15px] left-[24px] top-[5px] font-medium text-[13px]/[100%] text-GrayScalePrimary-900">로그인 상태 유지</span>
              </div>
              <div className="w-[360px] h-[46px] right-0 top-[237px]">
                <div className="relative flex flex-row items-center p-0 gap-1">
                  <span className="w-[56px] h-[16px] font-normal text-[14px]/[100%] text-GrayScalePrimary-900">회원가입</span>
                  <span className="h-[16px] font-normal border-r text-GrayScalePrimary-900"/>
                  <span className="w-[105px] h-[16px] font-normal text-[14px]/[100%] text-GrayScalePrimary-900">비밀번호 재설정</span>
                <button className="absolute w-[140px] h-[46px] right-0 top-[calc(50%-46px/2)] rounded-lg bg-GrayScalePrimary-300 text-GrayScaleNeutral-100 font-bold text-sm">이메일로 로그인</button>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center p-[8px_0px] gap-[8px] w-[360px] h-[46px] border border-solid border-GrayScalePrimary-300 rounded-lg">
                 <Image src="/google.png" alt="google" height={28} width={28}/>
                 <span className="h-[16px] font-normal text-[15px]/[100%]">Google 로그인</span>
              </div>
            </div> 
        </div>
       </div>
       </>
    )
}