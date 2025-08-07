import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  activeSort: { name: "популярности", sort: "raiting" },
  currentPage: 1,
}

export const filterSlise = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state,action) => {
      state.categoryId = action.payload
    },
    setSort: (state,action) => {
      state.activeSort = action.payload
    },
    setCurrentPage: (state,action) => {
      state.currentPage = action.payload
    },
    setFilters: (state,action) => {
      state.categoryId = Number(action.payload.categoryId)
      state.activeSort = action.payload.sort
      state.currentPage = Number(action.payload.currentPage)
    }
  },
})

export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlise.actions

export default filterSlise.reducer