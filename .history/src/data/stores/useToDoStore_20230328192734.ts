import create from 'zustand';

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: { bears: number; }) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))