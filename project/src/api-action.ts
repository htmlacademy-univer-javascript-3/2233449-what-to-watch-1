import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Film} from './types/film';
import {
  getFilms,
  setAuthorizationStatus,
  setCurrentFilm,
  setCurrentFilmReviews,
  setCurrentFilmSimilar,
  setDataLoadingStatus,
  setUser
} from './store/action';
import {AppDispatch, State} from './types/store';
import {AuthorizationStatus, COMMENTS_ROUTE, FILM_ROUTE, LOGIN_ROUT, LOGOUT_ROUT, SIMILAR_ROUTE} from './constants';
import {clearToken, saveToken} from './token';
import {UserData} from './types/user-data-type';
import {AuthData} from './types/auth-data';
import {Review} from './types/review';


export const getFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/getFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(false));
    const {data} = await api.get<Film[]>(FILM_ROUTE);
    dispatch(getFilms(data));
    dispatch(setDataLoadingStatus(true));
  },
);

export const checkLoginAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/checkLogin',
  async (_arg, {dispatch, extra: api}) => {
    await api.get<UserData>(LOGIN_ROUT).then(
      () => {
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      }
    ).catch(
      (err) => {
        if (err.response) {
          dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
        }
      }
    );
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
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      dispatch(setUser(null));
      clearToken();
    });
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/login',
  async ({email, password}, {dispatch, extra: api}) => {
    await api.post<UserData>(LOGIN_ROUT, {email, password}).then(
      (result) => {
        const data = result.data;
        saveToken(data?.token);
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
        dispatch(setUser(data));
      }
    ).catch(
      (err) => {
        if (err.response) {
          dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
          return err;
        }
      }
    );
  },
);

export const getFilmInfoAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/film',
  async (_arg, {dispatch, extra: api}) => {
    await api.get<Film>(`${FILM_ROUTE}/${_arg}`).then(
      (result) => {
        const data = result.data;
        dispatch(setCurrentFilm(data));
      }
    ).catch(
      (err) => {
        if (err.response) {
          return err;
        }
      }
    );
  },
);

export const getFilmCommentAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/review',
  async (_arg, {dispatch, extra: api}) => {
    await api.get<Review[]>(`${COMMENTS_ROUTE}/${_arg}`).then(
      (result) => {
        const data = result.data;
        dispatch(setCurrentFilmReviews(data));
      }
    ).catch(
      (err) => {
        if (err.response) {
          return err;
        }
      }
    );
  },
);

export const getFilmSimilarAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/filmSimilar',
  async (_arg, {dispatch, extra: api}) => {
    const url = `${FILM_ROUTE}/${_arg}/${SIMILAR_ROUTE}`;
    await api.get<Film[]>(url).then(
      (result) => {
        const data = result.data;
        dispatch(setCurrentFilmSimilar(data));
      }
    ).catch(
      (err) => {
        if (err.response) {
          return err;
        }
      }
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
    }).catch((error) => error.toString())
);
