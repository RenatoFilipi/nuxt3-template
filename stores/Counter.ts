import { defineStore, acceptHMRUpdate } from "pinia";

interface ICounter {
  count: number;
}

export const useCounterStore = defineStore("counter", {
  state: (): ICounter => ({ count: 0 }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
