import { Store } from "@/interfaces/store";
import create, { SetState } from "zustand";

const useStore = create<Store>((set: SetState<Store>) => ({
  widgets: [],
  addWidget: (arr) => {
    set((state) => ({ widgets: [...state.widgets, ...arr] }));
  },
  removeWidget: (arr) => {
    set((state) => ({
      widgets: state.widgets.filter((widget) => widget !== arr),
    }));
  },
  setWidget: (arr) => {
    set(() => ({ widgets: arr }));
  },
}));

export default useStore;
