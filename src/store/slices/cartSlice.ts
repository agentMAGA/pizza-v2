import { createSlice } from '@reduxjs/toolkit'
import { CartItemType } from '../../types/type';
import { TypeItems } from '../../types/typeStore';

const initialState: TypeItems = {
  totalPrice: 0,
  items: [],
}

const calcTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum: number, item: CartItemType) => sum + item.price * item.count, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item: CartItemType = action.payload;

      const foundItem = state.items.find(
        (i: CartItemType) => i.id === item.id && i.type === item.type && i.size === item.size
      );

      if (foundItem) {
        foundItem.count++;
      } else {
        state.items.push({ ...item, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    removeItem: (state, action) => {
      const { id, type, size } = action.payload;

      state.items = state.items.filter(
        (item: CartItemType) => !(item.id === id && item.type === type && item.size === size)
      );

      state.totalPrice = calcTotalPrice(state.items);
    },

    decreaseItem: (state, action) => {
      const { id, type, size } = action.payload;

      const foundItem = state.items.find(
        (i) => i.id === id && i.type === type && i.size === size
      );

      if (foundItem) {
        foundItem.count--;
        if (foundItem.count <= 0) {
          state.items = state.items.filter(
            (item: CartItemType) => !(item.id === id && item.type === type && item.size === size)
          );
        }
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
})

export const { addItem, removeItem, decreaseItem, clearItems} = cartSlice.actions;

export default cartSlice.reducer;
