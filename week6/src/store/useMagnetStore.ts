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
  magnets: [],

  updateMagnet: (id, data) =>
    set((state) => ({
      magnets: state.magnets.map((m) =>
        m.id === id ? { ...m, ...data } : m
      ),
    })),

  loadExpansionPack: () =>
    set((state) => ({
      magnets: [
        ...state.magnets,
        { id: "3", word: "New", status: "bank", x: 0, y: 0 },
      ],
    })),
}));