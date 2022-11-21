import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<{genre: string}>('films/changeGenre');
export const getFilms = createAction('films/getFilms');
export const getAllFilms = createAction('films/getAllFilms');
