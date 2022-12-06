import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilms, setAuthorizationStatus, setDataLoadingStatus, setUser} from './action';
import {Film} from '../types/film';
import {ALL_GENRES, AuthorizationStatus} from '../constants';
import {UserData} from '../types/user-data-type';

export type AppState = {
  films: Film[],
  currentGenre: string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  user: UserData|null,
  isError: boolean,
}

export const initialState:AppState = {
  currentGenre: ALL_GENRES,
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  isError: false,
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
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export default Reducer;


