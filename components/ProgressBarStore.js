import { create } from "zustand";

export const useProgressBarStore = create((set) => ({
  value: 0,
  setValue: (value) => set(() => ({ value })),
}));
