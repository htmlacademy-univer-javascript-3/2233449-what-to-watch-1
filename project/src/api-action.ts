import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Film} from './types/film';
import {AppDispatch, State} from './types/store';
import {
  COMMENTS_ROUTE,
  FAVORITES_ROUTE,
  FILM_ROUTE,
  LOGIN_ROUT,
  LOGOUT_ROUT,
  SIMILAR_ROUTE
} from './constants';
import {clearToken, saveToken} from './token';
import {UserData} from './types/user-data-type';
import {AuthData} from './types/auth-data';
import {Review} from './types/review';


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

export const checkLoginAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/checkLogin',
  async (_arg, {dispatch, extra: api}) => {
    await api.get<UserData>(LOGIN_ROUT);
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete<UserData>(LOGOUT_ROUT).then(() => {
      clearToken();
    });
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/login',
  async ({email, password}, {dispatch, extra: api}) => await api.post<UserData>(LOGIN_ROUT, {email, password}).then(
    (result) => {
      const data = result.data;
      saveToken(data?.token);
      return data;
    }
  ),
);

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
