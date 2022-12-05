import {configureStore} from '@reduxjs/toolkit';
import Reducer, {initialState} from './reducer';
import {createAPI} from '../api';

const api = createAPI();
export const store = configureStore({
  preloadedState: initialState,
  reducer: Reducer,
  middleware: ((getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: api}}))
});
