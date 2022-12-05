import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Film} from './types/film';
import {getFilms, setDataLoadingStatus} from './store/action';
import {AppDispatch, State} from './types/store';
import {FILM_ROUTE} from './constants';


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
