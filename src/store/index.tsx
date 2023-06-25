import { Store } from '@/interfaces/store';
import { create } from 'zustand';

const useStore = create<Store>((set) => ({
  // upload image
  uploadImage: {},
  setUploadImage: (uploadImage) => set({ uploadImage }),
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
  theme: { theme_type: 'ThemeA', color: '#725f5f' }, // A or B
  setTheme: (theme) => set({ theme }),
  // builder - site info edit
  siteInfo: {
    pavicon: '',
    title: '',
    description: '',
    sub_domain: '',
    setSiteInfo: (siteInfo) => {
      set((state) => ({ siteInfo: { ...state.siteInfo, ...siteInfo } }));
    },
  },

  // builder - company info edit
  companyInfo: {
    representative: '',
    logo: '',
    contact_email: '',
    phone_number: '',
    fax_number: '',
    biz_number: '',
    company_name: '',
    start_date: '',
  },
  setLogo: (logo) => {
    set((state) => ({ companyInfo: { ...state.companyInfo, logo } }));
  },
  setCompanyInfo: (companyInfo) => {
    set((state) => ({ companyInfo: { ...state.companyInfo, ...companyInfo } }));
  },

  // 제품/서비스 소개 부분
  buttondes: { buttonname: '' },
  setButtondes: (buttondes) => set({ buttondes }),

  add: false,
  setAdd: (add) => set({ add }),

  imgurl: '',
  setImgurl: (imgurl) => set({ imgurl }),
  products: [
    // {
    //   id: 1,
    //   name: '키비주얼/슬로건',
    //   title: '키비주얼/슬로건',
    //   description: '',
    //   image: '',
    // },
  ],

  setProducts: (arr) => set(() => ({ products: arr })),

  productservices: {
    order_list: '',
    description: '',
    text: '',
    link: '',
    setOrder_list: (order_list) => {
      set((state) => ({ productservices: { ...state.productservices, order_list } }));
    },
    setDescription: (description) => {
      set((state) => ({ productservices: { ...state.productservices, description } }));
    },
    setText: (text) => {
      set((state) => ({ productservices: { ...state.productservices, text } }));
    },
    setLink: (link) => {
      set((state) => ({ productservices: { ...state.productservices, link } }));
    },
  },
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
  // builder - missionvision
  missionVision: {
    mission: '',
    missionDetail: '',
    vision: '',
    visionDetail: '',
    setMission: (mission) => {
      set((state) => ({ missionVision: { ...state.missionVision, mission } }));
    },
    setMissionDetail: (missionDetail) => {
      set((state) => ({
        missionVision: { ...state.missionVision, missionDetail },
      }));
    },
    setVision: (vision) => {
      set((state) => ({ missionVision: { ...state.missionVision, vision } }));
    },
    setVisionDetail: (visionDetail) => {
      set((state) => ({
        missionVision: { ...state.missionVision, visionDetail },
      }));
    },
  },
  // builder - channel
  channel: {
    channelList: [
      {
        name: '인스타그램',
        value: '',
        checked: false,
        img: '/channel/인스타그램.png',
      },
      {
        name: '링크드인',
        value: '',
        checked: false,
        img: '/channel/링크드인.png',
      },
      {
        name: '유튜브',
        value: '',
        checked: false,
        img: '/channel/유튜브.png',
      },
      {
        name: '노션',
        value: '',
        checked: false,
        img: '/channel/노션.png',
      },
      {
        name: '네이버블로그',
        value: '',
        checked: false,
        img: '/channel/네이버블로그.png',
      },
      {
        name: '브런치스토리',
        value: '',
        checked: false,
        img: '/channel/브런치.png',
      },
      {
        name: '페이스북',
        value: '',
        checked: false,
        img: '/channel/페이스북.png',
      },
    ],
    setValue: (name, value) => {
      set((state) => ({
        channel: {
          ...state.channel,
          channelList: state.channel.channelList.map((channel) => {
            if (channel.name === name) {
              return { ...channel, value };
            } else {
              return channel;
            }
          }),
        },
      }));
    },
    setChecked: (name) => {
      set((state) => ({
        channel: {
          ...state.channel,
          channelList: state.channel.channelList.map((channel) => {
            if (channel.name === name) {
              return { ...channel, checked: !channel.checked };
            } else {
              return channel;
            }
          }),
        },
      }));
    },
  },
}));

export default useStore;
