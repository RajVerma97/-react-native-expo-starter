import { create } from "zustand";

interface CounterStoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

const useCounterStore = create<CounterStoreState>((set) => ({
  count: 0,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),
  reset: () =>
    set(() => ({
      count: 0,
    })),

  setCount: (value: number) =>
    set(() => ({
      count: value,
    })),
}));

export default useCounterStore;
