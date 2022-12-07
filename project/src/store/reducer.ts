import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  getFilms,
  setAuthorizationStatus,
  setCurrentFilm,
  setCurrentFilmReviews, setCurrentFilmSimilar,
  setDataLoadingStatus,
  setUser
} from './action';
import {Film} from '../types/film';
import {ALL_GENRES, AuthorizationStatus} from '../constants';
import {UserData} from '../types/user-data-type';
import {Review} from '../types/review';

export type AppState = {
  films: Film[],
  reviews: Review[],
  similarFilms: Film[],
  currentGenre: string,
  currentFilm: Film|null,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  user: UserData|null,
}

export const initialState:AppState = {
  currentGenre: ALL_GENRES,
  films: [],
  similarFilms: [],
  reviews: [],
  currentFilm: null,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
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
    })
    .addCase(setCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(setCurrentFilmReviews,(state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setCurrentFilmSimilar,(state, action) => {
      state.similarFilms = action.payload;
    });
});

export default Reducer;


