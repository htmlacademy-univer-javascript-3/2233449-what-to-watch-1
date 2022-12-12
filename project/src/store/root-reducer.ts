import {NameSpace} from '../constants';
import {combineReducers} from '@reduxjs/toolkit';
import filmReducer from './film-reducer/film-reducer';
import {genreReducer} from './genre-reducer/genre-reducer';
import {userReducer} from './user-reducer/user-reducer';
import {dataReducer} from './data-reducer/data-reducer';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataReducer.reducer,
  [NameSpace.Films]: filmReducer.reducer,
  [NameSpace.User]: userReducer.reducer,
  [NameSpace.Genre]: genreReducer.reducer,
});
