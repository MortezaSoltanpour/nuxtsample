import { defineStore } from "pinia";

export const useCounterPinia = defineStore("counterPinia", {
  state: () => {
    return {
      countPinia: 0,
    };
  },
  actions: {
    incrementPinia(value) {
      this.countPinia += value;
    },
    decrementPinia(value) {
      this.countPinia -= value;
    },
  },
});
