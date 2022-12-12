import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../../types/film';
import {NameSpace} from '../../constants';
import {Review} from '../../types/review';
import {getFilmCommentAction, getFilmInfoAction, getFilmSimilarAction} from '../../api-action';

export type AppState = {
  reviews: Review[],
  similarFilms: Film[],
  currentFilm: Film|null,
}

export const initialState:AppState = {
  similarFilms: [],
  reviews: [],
  currentFilm: null,
};

export const filmReducer = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFilmInfoAction.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
      })
      .addCase(getFilmCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(getFilmSimilarAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      });
  },
});

export default filmReducer;


