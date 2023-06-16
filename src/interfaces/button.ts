export interface BeforeButtonProps {
  beforePageName?: string;
  nowPageName: string;
  classname: string; // className 속성 값
}

export interface PrimaryButtonProps {
  onClick: () => void; // 버튼 클릭 시 실행 함수
  text: string; // 버튼 텍스트
  color: number;
  classname: string; // className 속성 값
}
