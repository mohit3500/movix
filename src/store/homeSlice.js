import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
  url: {},
  genres: {},
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const getAllUrl = (state) => state.home.url;
export const getAllGenres = (state) => state.home.genres;
export const { getApiConfiguration, getGenres } = homeSlice.actions;
export default homeSlice.reducer;
