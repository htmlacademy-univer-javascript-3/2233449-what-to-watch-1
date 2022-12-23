import {createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {AppDispatch, State} from '../types/store';
import {AxiosInstance} from 'axios';
import {COMMENTS_ROUTE, FAVORITES_ROUTE, FILM_ROUTE, SIMILAR_ROUTE} from '../constants';
import {Review} from '../types/review';

export const getFilmInfoAction = createAsyncThunk<Film, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/film',
  async (_arg, {dispatch, extra: api}) => await api.get<Film>(`${FILM_ROUTE}/${_arg}`).then(
    (result) => result.data
  ),
);

export const getFilmCommentAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/review',
  async (_arg, {dispatch, extra: api}) => await api.get<Review[]>(`${COMMENTS_ROUTE}/${_arg}`).then(
    (result) => result.data
  ),
);

export const getFavoriteFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getFavourite',
  async (_arg, {dispatch, extra: api}) => {
    const url = `${FAVORITES_ROUTE}`;
    const {data} = await api.get<Film[]>(url);
    return data;
  },
);

export const setFavoriteFilmAction = createAsyncThunk<
  Film,
  { filmId: number; status: number },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(
    'films/setFavorite',
    async ({ filmId: id, status }, { dispatch, extra: api }) => {
      const { data } = await api.post<Film>(`${FAVORITES_ROUTE}/${id}/${status}`);
      return data;
    }
  );

export const getFilmSimilarAction = createAsyncThunk<Film[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/filmSimilar',
  async (_arg, {dispatch, extra: api}) => {
    const url = `${FILM_ROUTE}/${_arg}/${SIMILAR_ROUTE}`;
    return await api.get<Film[]>(url).then(
      (result) => result.data
    );
  },
);

class ReviewData {
  comment: string | undefined;
  rating: number | undefined;
  filmId: number | undefined;
}

export const postCommentAction = createAsyncThunk<Review, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postComment',
  async (_arg, {dispatch, extra: api}) =>
    await api.post(`${COMMENTS_ROUTE}/${_arg.filmId}`, {
      comment: _arg.comment,
      rating: _arg.rating
    })
);

export const getFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/getFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(FILM_ROUTE);
    return data;
  },
);

export const getPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'getPromoFilm',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<Film>('/promo');
    return data;
  },
);
