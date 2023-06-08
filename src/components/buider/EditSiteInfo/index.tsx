import { EditSiteInfoProps } from "@/types/builder";
import React from "react";

export default function EditSiteInfo({ setIsTopbarBtn }: EditSiteInfoProps) {
  return (
    <div className="w-[400px] h-[800px] border rounded-[5px] mt-[20px] overflow-y-auto relative">
      <button
        className="w-[auto] fixed right-[5px] border absolute"
        onClick={() => {
          setIsTopbarBtn((prevState) => ({
            mainColorBtn: false,
            editSiteInfoBtn: !prevState.editSiteInfoBtn,
          }));
        }}
      >
        X
      </button>
      <div className="w-[350px] ml-[25px] h-[50px] border">
        사이트 정보 수정
      </div>
      <div className="w-[350px] ml-[25px] h-[50px] border">웹 페이지 관리</div>
      <div className="w-[350px] ml-[25px] h-[300px] border">파비콘 설정</div>
      <div className="w-[350px] ml-[25px] h-[100px] border">
        웹 페이지 이름 설정
      </div>
      <div className="w-[350px] ml-[25px] h-[100px] border">도메인 설정</div>
      <div className="w-[350px] ml-[25px] h-[50px] border">검색 결과 관리</div>
      <div className="w-[350px] ml-[25px] h-[100px] border">사이트 제목</div>
      <div className="w-[350px] ml-[25px] h-[100px] border">사이트 설명</div>
      <div className="w-[350px] ml-[25px] h-[50px] border">GA 연동</div>
      <div className="w-[350px] ml-[25px] h-[100px] border">
        GA 추척 ID 입력
      </div>
    </div>
  );
}
