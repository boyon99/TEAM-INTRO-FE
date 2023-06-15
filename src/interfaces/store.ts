export interface Store {
  widgets: string[];
  addWidget: (widget: string[]) => void;
  removeWidget: (id: string) => void;
  setWidget: (widgets: string[]) => void;
}
