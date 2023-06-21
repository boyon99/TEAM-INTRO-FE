import { Store } from '@/interfaces/store';
import create, { SetState } from 'zustand';

const useStore = create<Store>((set) => ({
  // builder - 순서 변경 토글
  isChangeOederToggle: false,
  setIsChangeOederToggle: (isChangeOederToggle) => set({ isChangeOederToggle }),
  // builder - 위젯
  widgets: [
    // {
    //   name: "헤더/푸터",
    //   id: 1,
    //   toggle: true,
    //   routerName: "builder/headerfooter#w-01",
    // },
    {
      name: '키비주얼/슬로건',
      id: 1,
      toggle: true,
      routerName: 'builder/keyvisual#w-01',
    },
    {
      name: '미션/비젼',
      id: 2,
      toggle: false,
      routerName: 'builder/missionvision#w-02',
    },
    {
      name: '제품/서비스 소개',
      id: 3,
      toggle: false,
      routerName: 'builder/productservice#w-03',
    },
    {
      name: '팀 멤버',
      id: 4,
      toggle: false,
      routerName: 'builder/teammember#w-04',
    },
    {
      name: '컨택어스',
      id: 5,
      toggle: false,
      routerName: 'builder/contactu#w-05',
    },
    {
      name: '보도자료',
      id: 6,
      toggle: false,
      routerName: 'builder/press#w-06',
    },
    {
      name: '다운로드',
      id: 7,
      toggle: false,
      routerName: 'builder/download#w-07',
    },
    { name: '연혁', id: 8, toggle: false, routerName: 'builder/history#w-08' },
    {
      name: '팀 문화',
      id: 9,
      toggle: false,
      routerName: 'builder/teamculture#w-09',
    },
    {
      name: '핵심 성과',
      id: 10,
      toggle: false,
      routerName: 'builder/result#w-10',
    },
    {
      name: '파트너스',
      id: 11,
      toggle: false,
      routerName: 'builder/partners#w-11',
    },
    {
      name: '고객리뷰',
      id: 12,
      toggle: false,
      routerName: 'builder/review#w-12',
    },
    { name: '채널', id: 13, toggle: false, routerName: 'builder/channel#w-13' },
    {
      name: '특허/인증',
      id: 14,
      toggle: false,
      routerName: 'builder/patent#w-14',
    },
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
  // builder - theme
  theme: { theme: 'A', color: '#725f5f' }, // A or B
  setTheme: (theme) => set({ theme }),
  // builder - header, footer
  headerfooter: {
    quickmenu: [
      { name: '미션/비젼', toggle: false },
      { name: '제품/서비스 소개', toggle: false },
      { name: '팀 소개', toggle: false },
      { name: '컨택어스', toggle: false },
      { name: '보도자료', toggle: false },
      { name: '다운로드', toggle: false },
      { name: '연혁', toggle: false },
      { name: '팀 문화', toggle: false },
      { name: '핵심성과', toggle: false },
      { name: '파트너스', toggle: false },
      { name: '고객리뷰', toggle: false },
      { name: '특허/인증', toggle: false },
    ],
    lowerMenuToggle: false,
    setQuickMenuToggle: (name) => {
      set((state) => ({
        headerfooter: {
          ...state.headerfooter,
          quickmenu: state.headerfooter.quickmenu.map((menu) => {
            if (menu.name === name) {
              return { ...menu, toggle: !menu.toggle };
            } else {
              return menu;
            }
          }),
        },
      }));
    },
    setLowerMenuToggle: (toggle) => {
      set((state) => ({
        headerfooter: { ...state.headerfooter, lowerMenuToggle: toggle },
      }));
    },
  },
  // builder - keyvisual
  keyVisual: {
    bgImg: '',
    filter: 'Black',
    slogan: '',
    sloganDetail: '',
    // keyVisual 객체 수정 함수
    // setKeyVisual: (keyVisual) => {
    //   set((state) => ({ keyVisual: { ...state.keyVisual, ...keyVisual } }));
    // },
    setBgImg: (bgImg) => {
      set((state) => ({ keyVisual: { ...state.keyVisual, bgImg } }));
    },
    setFilter: (filter) => {
      set((state) => ({ keyVisual: { ...state.keyVisual, filter } }));
    },
    setSlogan: (slogan) => {
      set((state) => ({ keyVisual: { ...state.keyVisual, slogan } }));
    },
    setSloganDetail: (sloganDetail) => {
      set((state) => ({ keyVisual: { ...state.keyVisual, sloganDetail } }));
    },
  },
}));

export default useStore;
