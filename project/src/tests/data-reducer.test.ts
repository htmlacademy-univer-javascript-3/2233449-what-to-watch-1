import {dataReducer} from "../store/data-reducer/data-reducer";
import {getFilmsAction} from "../api-action";
import {Film} from "../types/film";

describe('Reducer: data', () => {
  it('should not change state when unknown action', () => {
    expect(dataReducer.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({films: [], isDataLoaded: false});
  });

  it('should not change state when pending status', () => {
    const state = {films: [], isDataLoaded: false};
    expect(dataReducer.reducer(state, {type: getFilmsAction.pending}))
      .toEqual({films: [], isDataLoaded: false});
  });

  it('should get films and change status', () => {
    const state = {films: [], isDataLoaded: false};
    const film = {id: 2, name: 'testFilm', isFavorite: true} as Film;
    expect(dataReducer.reducer(state, {type: getFilmsAction.fulfilled, payload: [film]}))
      .toEqual({films: [film], isDataLoaded: true});
  });
})
