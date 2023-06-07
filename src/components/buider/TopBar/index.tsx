import MainColor from "@/components/buider/MainColor";
import React, { useState } from "react";

export default function TopBar() {
  // topbar 버튼 상태
  const [isTopbarBtn, setIsTopbarBtn] = useState({ mainColorBtn: false });

  return (
    <>
      <div className="w-[1200px] h-[80px] mx-auto border">
        <div className="flex h-[50px] mt-[15px] bg-primary-300">
          <div className="w-[150px] h-[50px] border mr-[15px]">질링스 로고</div>
          <div className="w-[420px] h-[50px] border mr-[15px]">테마</div>
          <button
            className="w-[170px] h-[50px] border mr-[15px]"
            onClick={() => {
              setIsTopbarBtn((prevState) => ({
                ...prevState,
                mainColorBtn: !prevState.mainColorBtn,
              }));
            }}
          >
            메인컬러
          </button>
          <button className="h-[50px] w-[170px] border mr-[15px]">
            사이트 정보 수정
          </button>
          <button className="h-[50px] w-[110px] border mr-[15px]">
            저장하기
          </button>
        </div>
        {isTopbarBtn.mainColorBtn ? <MainColor /> : <></>}
      </div>
    </>
  );
}
