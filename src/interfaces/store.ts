export interface Store {
  widgets: Widget[];
  setWidget: (widgets: Widget[]) => void;
  setToggle: (name: string) => void;
  isChangeOederToggle: boolean;
  setIsChangeOederToggle: (isChangeOederToggle: boolean) => void;
}

export interface Widget {
  id: number;
  name: string;
  toggle: boolean;
  routerName: string;
}
