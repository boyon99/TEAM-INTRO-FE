export interface ToggleWidgetProps {
  toggle: boolean;
  setToggle?: (toggle: number) => void; // 토글 변경 함수
  setWidgetToggle?: any; // 위젯 사용여부 토글 변경 함수
  widgetName?: string; // 위젯 이름
  toggleText: {
    true: string; // true일 때 텍스트
    false: string; // false일 때 텍스트
  };
}
