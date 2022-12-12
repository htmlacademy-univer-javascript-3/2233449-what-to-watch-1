import {createSlice} from '@reduxjs/toolkit';
import {ALL_GENRES, NameSpace} from '../../constants';

type GenreReducer = {
  currentGenre:string
}

export const initialState: GenreReducer = {
  currentGenre: ALL_GENRES
};

export const genreReducer = createSlice({
  name: NameSpace.Genre,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    }
  }
});

export const {changeGenre} = genreReducer.actions;
