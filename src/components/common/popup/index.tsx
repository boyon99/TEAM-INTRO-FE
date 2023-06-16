



export interface popup {
    text: string
    cancle: string
    confirm: string
    isOpen: boolean
    onClick: () => void
}

export default function Popup({
    text,
    cancle,
    confirm,
    isOpen,
    onClick
}: popup) {
   
    return (
        <>
        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-opacity-10 backdrop-invert bg-white/30">
            
            <div className="w-[350px] h-[256px] fixed rounded-lg border border-solid border-[#b3b2c0] bg-[#fff]">
            <div className="w-[330px] mt-[70px] h-[32px] m-[0px_auto] text-center">
           <span className="font-normal text-[19px]/[160%]">{text}</span>
            </div>
           <div className="w-[214px] h-[48px] mt-[62px] ml-[68px]">
              <button className="w-[104px] h-[40px] border border-solid border-[#000] rounded-lg mr-[6px] font-bold text-lg text-[#6e6d86]" onClick={onClick}>{cancle}</button>
              <button className="w-[104px] h-[40px] rounded-lg bg-[#4b48df] text-[#fff] font-bold text-lg" onClick={onClick}>{confirm}</button>
           </div>
        </div>
    </div>
            
        )}
        </>
        
    )
  }