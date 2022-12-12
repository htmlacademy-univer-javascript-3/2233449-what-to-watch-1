import {State} from '../../types/store';
import {NameSpace} from '../../constants';

export const getCurrentGenre = (state: State): string => state[NameSpace.Genre].currentGenre;
