import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {TypePizza } from '../../types/typeStore';
import { CartItemType } from '../../types/type';

type TypeFetchPizza = {
  categoryId: number,
  activeSort: {sort:string},
  currentPage: number
}

// Асинхронный action
export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizza',
  async ({ categoryId, activeSort, currentPage } : TypeFetchPizza) => {
    const baseUrl = "https://6890853c944bf437b59644e0.mockapi.io/item";
    const sortBy = activeSort.sort; // activeSort это объект
    const url =
      categoryId === 0
        ? `${baseUrl}?page=${currentPage}&limit=4&sortBy=${sortBy}`
        : `${baseUrl}?page=${currentPage}&limit=4&category=${categoryId}&sortBy=${sortBy}`;

    const response = await axios.get(url);
    return response.data as CartItemType[];
  }
)

const initialState:TypePizza = {
  pizza: [],
  status: 'loading',
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.status = 'loading';
        state.pizza = [];
      })
      .addCase(fetchPizza.fulfilled, (state, action) => {
        state.pizza = action.payload;
        state.status = 'success';
      })
      .addCase(fetchPizza.rejected, (state) => {
        state.status = 'error';
        state.pizza = [];
      });
  },
})

export default pizzaSlice.reducer;
