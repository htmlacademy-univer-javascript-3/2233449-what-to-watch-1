import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {getFilms, changeGenre, getAllFilms} from './action';
import {genres} from '../mocks/genres';

export const initialState = {
  genre: genres[0].name,
  films: films
};

export const Reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(getFilms, (state) => {
      if (state.genre === genres[0].name) {
        state.films = films;
      } else {
        state.films = films.filter((film) => film.genre === state.genre);
      }
    }
    )
    .addCase(getAllFilms, (state) => {
      state.films = films;
    });
});

export default Reducer;


