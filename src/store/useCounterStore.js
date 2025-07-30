import { create } from 'zustand';
import axios from 'axios';

export const usePizzaStore = create((set , get) => ({
  pizza: [],
  isLoading: false,
  activeIndex: 0,
  activeSort: 0,

  fetchPizza: async () => {
    try {
      set({ isLoading: true });
      
      const category = get().activeIndex;
      const baseUrl = "https://687779a8dba809d901ef8e66.mockapi.io/test/items";
      const url = category === 0 ? baseUrl : `${baseUrl}?category=${category}`;
  
      const res = await axios.get(url);
      set({ pizza: res.data });
  
    } catch (error) {
      console.error("Ошибка загрузки пицц:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  setActiveIndex: (i) => set({activeIndex:i}),
  setActiveSort: (obj) => set({activeSort:obj})
}));