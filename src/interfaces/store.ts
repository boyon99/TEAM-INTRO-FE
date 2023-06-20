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
}

export interface Widget {
  id: number;
  name: string;
  toggle: boolean;
  routerName: string;
}

export interface Theme {
  theme: "A" | "B"; // A or B
  color: string;
}

export interface Buttonde {
  buttonname: string;
 
}

