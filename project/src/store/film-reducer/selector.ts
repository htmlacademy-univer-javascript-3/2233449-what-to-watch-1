import {State} from '../../types/store';
import {NameSpace} from '../../constants';
import {Film} from '../../types/film';
import {Review} from '../../types/review';

export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Films].similarFilms;
export const getCurrentFilm = (state: State): Film|null => state[NameSpace.Films].currentFilm;
export const getReviews = (state: State): Review[] => state[NameSpace.Films].reviews;
