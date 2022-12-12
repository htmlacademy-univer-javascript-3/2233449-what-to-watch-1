import {State} from '../../types/store';
import {Film} from '../../types/film';
import {NameSpace} from '../../constants';

export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getFilms = (state: State): Film[] => state[NameSpace.Data].films;
