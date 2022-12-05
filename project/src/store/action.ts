import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';

export const changeGenre = createAction<{currentGenre: string}>('films/changeGenre');
export const getFilms = createAction<Film[]>('films/getFilms');
export const setDataLoadingStatus = createAction<boolean>('data/dataLoadingStatus');
