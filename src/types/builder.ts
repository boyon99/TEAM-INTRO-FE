export interface EditSiteInfoProps {
  setIsTopbarBtn: React.Dispatch<
    React.SetStateAction<{
      mainColorBtn: boolean;
      editSiteInfoBtn: boolean;
    }>
  >;
}

export interface MenuProps {
  routerName: string;
  buttonName: string;
  isToggle: boolean;
}
