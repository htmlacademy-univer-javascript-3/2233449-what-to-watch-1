import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {AuthorizationStatus} from '../constants';
import {UserData} from '../types/user-data-type';

export const changeGenre = createAction<{currentGenre: string}>('films/changeGenre');
export const getFilms = createAction<Film[]>('films/getFilms');
export const setDataLoadingStatus = createAction<boolean>('data/dataLoadingStatus');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('data/authorizationStatus');
export const setUser = createAction<UserData|null>('data/userData');
export const setIsError = createAction<boolean>('data/isError');
