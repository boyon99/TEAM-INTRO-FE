export interface BeforeButtonProps {
  pageName: string; // 페이지 이름
  classname?: string; // className 속성 값 - 버튼의 크기를 조절하기 위해 사용
}

export interface PrimaryButtonProps {
  onClick: () => void; // 버튼 클릭 시 실행 함수
  text: string; // 버튼 텍스트
  type: 'primary' | 'white'; // primary: 파란색, white: 흰색
  classname: string; // className 속성 값 - 버튼의 크기를 조절하기 위해 사용
  inputType?: string; // input 태그의 type 속성 값
}
