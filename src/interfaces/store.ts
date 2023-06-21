import { Header } from 'next/dist/lib/load-custom-routes';

export interface Store {
  widgets: Widget[];
  setWidget: (widgets: Widget[]) => void;
  setToggle: (name: string) => void;
  isChangeOederToggle: boolean;
  setIsChangeOederToggle: (isChangeOederToggle: boolean) => void;
  theme: Theme; // A or B
  setTheme: (theme: Theme) => void;
  buttondes: Buttonde;
  setButtondes: (buttonname: Buttonde) => void;
  add: boolean;
  setAdd: (add: boolean) => void;
  products: Products[];
  setProducts: (products: Products[]) => void;
  headerfooter: HeaderFooter;
  keyVisual: KeyVisual;
}

export interface KeyVisual {
  bgImg: string;
  filter: 'Black' | 'White';
  slogan: string;
  sloganDetail: string;
  // setKeyVisual: (keyVisual: KeyVisual) => void;
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
  theme: 'A' | 'B'; // A or B
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
}

