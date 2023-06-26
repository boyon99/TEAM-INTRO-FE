import { Header } from 'next/dist/lib/load-custom-routes';

export interface Store {
  uploadImage: {};
  setUploadImage: (uploadImage: (imgSrc: any) => void) => void;
  resetUploadImage: () => void;
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
  header_and_footer_status_list: boolean[];
  setHeaderAndFooter: (header_and_footer_status_list: number) => void;
  setHeaderAndFooterList: (header_and_footer_status_list: boolean[]) => void;
  imgurl: string;
  setImgurl: (imgurl: string) => void;
  keyVisual: KeyVisual;
  setSloganDetail: (slogan_detail: string) => void;
  setBackground: (background: string) => void;
  setKeyVisual: (keyVisual: KeyVisual) => void;
  missionVision: MissionVision;
  setMissionVision: (missionVision: MissionVision) => void;
  setMissionDetail: (mission_detail: string) => void;
  setVisionDetail: (vision_detail: string) => void;
  channel: Channel;
  setChannel: (channel: Channel) => void;
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
  instagram_status: boolean;
  instagram: string;
  linked_in_status: boolean;
  linked_in: string;
  youtube_status: boolean;
  youtube: string;
  notion_status: boolean;
  notion: string;
  naver_blog_status: boolean;
  naver_blog: string;
  brunch_stroy_status: boolean;
  brunch_stroy: string;
  facebook_status: boolean;
  facebook: string;
}

export interface MissionVision {
  mission: string;
  vision: string;
  mission_detail: string;
  vision_detail: string;
}
export interface KeyVisual {
  background: string;
  filter: 'BLACK' | 'WHITE';
  slogan: string;
  slogan_detail: string;
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
