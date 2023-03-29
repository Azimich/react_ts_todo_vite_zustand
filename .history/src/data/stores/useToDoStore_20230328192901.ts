import create from 'zustand';

interface ITask {
  id: string;
  title: string;
  createdAt: number;
}

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))