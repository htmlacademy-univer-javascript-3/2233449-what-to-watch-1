import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Film} from './types/film';
import {getFilms, setAuthorizationStatus, setDataLoadingStatus, setIsError, setUser} from './store/action';
import {AppDispatch, State} from './types/store';
import {AuthorizationStatus, FILM_ROUTE, LOGIN_ROUT, LOGOUT_ROUT} from './constants';
import {clearToken, saveToken} from './token';
import {UserData} from './types/user-data-type';
import {AuthData} from './types/auth-data';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
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
        dispatch(setIsError(false));
      }
    ).catch(
      (err) => {
        if (err.response) {
          dispatch(setIsError(true));
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
          return err;
        }
      }
    );
  },
);
