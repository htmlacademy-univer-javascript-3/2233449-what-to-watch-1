import {createReducer} from '@reduxjs/toolkit';
import {setDataLoadingStatus} from './action';
import {getFilms, changeGenre} from './action';
import {Film} from '../types/film';

export type AppState = {
  films: Film[],
  currentGenre: string
  isDataLoaded: boolean
}

export const initialState:AppState = {
  currentGenre: 'All genres',
  films: [],
  isDataLoaded: false
};

export const Reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(getFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export default Reducer;


