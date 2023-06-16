import { Store } from "@/interfaces/store";
import create, { SetState } from "zustand";

const useStore = create<Store>((set: SetState<Store>) => ({
  // builder 순서 변경 토근
  isChangeOederToggle: false,
  setIsChangeOederToggle: (isChangeOederToggle) => set({ isChangeOederToggle }),
  // builder 위젯 목록
  widgets: [
    { name: "헤더/푸터", id: 1, toggle: true },
    { name: "키비주얼/슬로건", id: 2, toggle: true },
    { name: "미션/비젼", id: 3, toggle: false },
    { name: "제품/서비스 소개", id: 4, toggle: false },
    { name: "팀 멤버", id: 5, toggle: false },
    { name: "컨택어스", id: 6, toggle: false },
    { name: "보도자료", id: 7, toggle: false },
    { name: "다운로드", id: 8, toggle: false },
    { name: "연혁", id: 9, toggle: false },
    { name: "팀 문화", id: 10, toggle: false },
    { name: "핵심 성과", id: 11, toggle: false },
    { name: "파트너스", id: 12, toggle: false },
    { name: "고객리뷰", id: 13, toggle: false },
    { name: "채널", id: 14, toggle: false },
    { name: "특허/인증", id: 15, toggle: false },
  ],
  setWidget: (arr) => {
    set(() => ({ widgets: arr }));
  },
  setToggle: (name: string) => {
    set((state) => ({
      widgets: state.widgets.map((widget) => {
        if (widget.name === name) {
          return { ...widget, toggle: !widget.toggle };
        } else {
          return widget;
        }
      }),
    }));
  },
}));

export default useStore;
