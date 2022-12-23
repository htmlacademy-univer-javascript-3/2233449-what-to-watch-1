import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {getFilmsAction} from '../../api/api-action-film';
import {Film} from '../../types/film';

type DataReducer = {
  films: Film[],
  isDataLoaded: boolean,
}

export const initialState: DataReducer = {
  films: [],
  isDataLoaded: false,
};

export const dataReducer = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFilmsAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(getFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoaded = true;
      });
  }
}
);
