import {configureStore} from '@reduxjs/toolkit';
import Reducer, {initialState} from './reducer';

export const store = configureStore({preloadedState: initialState, reducer: Reducer});
