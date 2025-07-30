import { create } from 'zustand';
import axios from 'axios';

export const usePizzaStore = create((set , get) => ({
  pizza: [],
  isLoading: false,
  activeIndex: 0,
  activeSort: 0,
  activeSortCategory: {},
  currentPage: 1,


  sort : [
    {name:'популярности', sort:'raiting'},
    {name:'цене', sort:'price'},
    {name:'алфавиту', sort:'title'}
  ],

  fetchPizza: async () => {
    try {
      set({ isLoading: true });
      
      const category = get().activeIndex;
      const sortCategory = get().activeSortCategory.sort;
      const page = get().currentPage;
      const baseUrl = "https://687779a8dba809d901ef8e66.mockapi.io/test/items";
      const url = category === 0 ? `${baseUrl}?page=${page}&limit=4&&sortBy=${sortCategory}` : `${baseUrl}?page=${page}&limit=4&category=${category}&sortBy=${sortCategory}`;

  
      const res = await axios.get(url);
      set({ pizza: res.data });
  
    } catch (error) {
      console.error("Ошибка загрузки пицц:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  setActiveIndex: (i) => set({activeIndex:i}),
  setActiveSortName: (i) => set({activeSort:i}),
  setActiveSortCategory: (obj) => set({ activeSortCategory: obj }),
  setCurrentPage: (number) => set({currentPage:number})
}));