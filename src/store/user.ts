import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state() {
    return {
      name: "xiaohong",
      age: 18,
    };
  },
});
