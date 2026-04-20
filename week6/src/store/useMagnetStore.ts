import { create } from "zustand";




export interface Magnet{
    id: string,
    word: string,
    status: 'bank' | 'fridge', 
    x: number,
    y: number,
}

interface MagnetStore{
    magnets: Magnet[];
    updateMagnet: (id:string, data:Partial<Magnet>) => void;
    loadExpansionPack: () => void;
}

export const useMagnetStore = create<MagnetStore>((set) => ({
  magnets: [
  { id: "1", word: "Hello", status: "bank", x: 0, y: 0 },
  { id: "2", word: "World", status: "bank", x: 0, y: 0 },
  { id: "3", word: "React", status: "bank", x: 0, y: 0 },
],

  updateMagnet: (id, data) =>
    set((state) => ({
      magnets: state.magnets.map((m) =>
        m.id === id ? { ...m, ...data } : m
      ),
    })),

 loadExpansionPack: () =>
  set({
    magnets: [
      { id: "1", word: "Hello", status: "bank", x: 0, y: 0 },
      { id: "2", word: "World", status: "bank", x: 0, y: 0 },
      { id: "3", word: "Fridge", status: "bank", x: 0, y: 0 },
          { id: "4", word: "Bye", status: "bank", x: 0, y: 0 },
      { id: "5", word: "Linux", status: "bank", x: 0, y: 0 },
      { id: "6", word: "Computer", status: "bank", x: 0, y: 0 },
    ],
  }),

  
}));