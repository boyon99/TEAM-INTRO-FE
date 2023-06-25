import { Header } from 'next/dist/lib/load-custom-routes';

export interface Store {
  uploadImage: {};
  setUploadImage: (uploadImage: (imgSrc: any) => void) => void;
  widgets: Widget[];
  setWidget: (widgets: Widget[]) => void;
  setToggle: (name: string) => void;
  isChangeOederToggle: boolean;
  setIsChangeOederToggle: (isChangeOederToggle: boolean) => void;
  theme: Theme; // ThemeA or ThemeB
  setTheme: (theme: Theme) => void;
  buttondes: Buttonde;
  setButtondes: (buttonname: Buttonde) => void;
  add: boolean;
  setAdd: (add: boolean) => void;
  products: Products[];
  setProducts: (products: Products[]) => void;
  headerfooter: HeaderFooter;
  imgurl: string;
  setImgurl: (imgurl: string) => void;
  keyVisual: KeyVisual;
  missionVision: MissionVision;
  channel: Channel;
  productservices: ProductServices;
  siteInfo: SiteInfo;
  setSiteInfo: (siteInfo: SiteInfo) => void;
  setPaivcon: (paivcon: string) => void;
  companyInfo: CompanyInfo;
  setLogo: (logo: string) => void;
  setCompanyInfo: (companyInfo: CompanyInfo) => void;
}

export interface CompanyInfo {
  representative: string;
  logo: string;
  contact_email: string;
  phone_number: string;
  fax_number: string;
  biz_number: string;
  company_name: string;
  start_date: string;
}

export interface SiteInfo {
  pavicon: string;
  title: string;
  description: string;
  sub_domain: string;
}

export interface Channel {
  channelList: ChannelList[];
  setValue: (name: string, value: string) => void;
  setChecked: (name: string) => void;
}
export interface ChannelList {
  name: string;
  value: string;
  checked: boolean;
  img: string;
}

export interface MissionVision {
  mission: string;
  vision: string;
  missionDetail: string;
  visionDetail: string;
  setMission: (mission: string) => void;
  setVision: (vision: string) => void;
  setMissionDetail: (missionDetail: string) => void;
  setVisionDetail: (visionDetail: string) => void;
}
export interface KeyVisual {
  bgImg: string;
  filter: 'Black' | 'White';
  slogan: string;
  sloganDetail: string;
  setBgImg: (bgImg: string) => void;
  setFilter: (filter: 'Black' | 'White') => void;
  setSlogan: (slogan: string) => void;
  setSloganDetail: (sloganDetail: string) => void;
}

export interface HeaderFooter {
  quickmenu: QuickMenu[];
  lowerMenuToggle: boolean;
  setQuickMenuToggle: (name: string) => void;
  setLowerMenuToggle: (lowerMenuToggle: boolean) => void;
}

export interface QuickMenu {
  name: string;
  toggle: boolean;
}

export interface Widget {
  id: number;
  name: string;
  toggle: boolean;
  routerName: string;
}

export interface Theme {
  theme_type: 'ThemeA' | 'ThemeB'; // A or B
  color: string;
}

export interface Buttonde {
  buttonname: string;
}

export interface Products {
  id?: number;
  name: string;
  title: string;
  description: string;
  image: string;
  products_and_services_element_id?: number;
  order?: number;
}
export interface ProductServices {
  order_list: string;
  description: string;
  text: string;
  link: string;
  setOrder_list: (order_list: string) => void;
  setDescription: (description: string) => void;
  setText: (text: string) => void;
  setLink: (link: string) => void;
}
