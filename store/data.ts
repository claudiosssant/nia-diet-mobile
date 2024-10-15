import { create } from 'zustand';

export type DietData = {
  name: string;
  age: string;
  height: string;
  weight: string;
  frequency: string;
  objective: string;
  gender: string;
}

type DataState = {
  user: DietData;
  setPageOne: (data: Omit<DietData, "gender" | "objective" | "frequency">) => void;
  setPageTwo: (data: Pick<DietData, "gender"| "objective" | "frequency">) => void;
}

export const useDataStore = create<DataState>((set) => ({
  user: {
    name: "",
    age: "",
    frequency: "",
    objective: "",
    height: "",
    weight: "",
    gender: "",
  },
  
  setPageOne: (data) => set((state) => ({ user: {...state.user, ...data}})),
  setPageTwo: (data) => set((state) => ({ user: {...state.user, ...data}})),
}))