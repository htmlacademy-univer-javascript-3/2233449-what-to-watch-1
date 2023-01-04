import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/store';
import {
  LOGIN_ROUT,
  LOGOUT_ROUT,
} from '../constants';
import {clearToken, saveToken} from '../token';
import {UserData} from '../types/user-data-type';
import {AuthData} from '../types/auth-data';

export const checkLoginAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/checkLogin',
  async (_arg, {dispatch, extra: api}) => {
    const result = await api.get<UserData>(LOGIN_ROUT);
    return result.data;
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
