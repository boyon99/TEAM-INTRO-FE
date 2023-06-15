export interface BeforeButtonProps {
  beforePageName?: string; // title of the page
  nowPageName: string; // title of the page
}

export interface PrimaryButtonProps {
  onClick: () => void;
  text: string;
  color: number;
  classname: string;
}
