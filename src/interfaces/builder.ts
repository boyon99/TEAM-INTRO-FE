export interface MenuProps {
  routerName: string; // 이동할 페이지 경로
  buttonName: string; // 버튼 이름
  isActivate?: boolean; //위젯 추가, 삭제가 가능한 항목의 경우 true, 아닌 경우 false
}
