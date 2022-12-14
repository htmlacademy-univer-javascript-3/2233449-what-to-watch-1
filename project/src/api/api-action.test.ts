import {createAPI} from './api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../types/store';
import {Action} from '@reduxjs/toolkit';
import {COMMENTS_ROUTE, FILM_ROUTE, LOGIN_ROUT, LOGOUT_ROUT, PROMO_ROUTE} from '../constants';
import {checkLoginAction, loginAction, logoutAction} from './api-action-user';
import {AuthData} from '../types/auth-data';
import {Film} from '../types/film';
import {getFilmCommentAction, getFilmsAction, getPromoFilmAction} from './api-action-film';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is auth when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(LOGIN_ROUT)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkLoginAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkLoginAction.pending.type,
      checkLoginAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {email: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(LOGIN_ROUT)
      .reply(200, {token: 'secret'});


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('what-to-watch-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(LOGOUT_ROUT)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('what-to-watch-token');
  });

  it('should dispatch Load films when GET /films', async () => {
    const mockFilms = createMockFilms(2);
    mockAPI
      .onGet(FILM_ROUTE)
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(getFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      getFilmsAction.pending.type,
      getFilmsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load comments when GET /promo', async () => {
    mockAPI
      .onGet(PROMO_ROUTE)
      .reply(200);

    const store = mockStore();

    await store.dispatch(getPromoFilmAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      getPromoFilmAction.pending.type,
      getPromoFilmAction.fulfilled.type
    ]);
  });

  it('should dispatch Load comments when GET /comments/{filmId}', async () => {
    const mockFilms = createMockFilms(1);
    const url = `${COMMENTS_ROUTE}/${mockFilms[0].id}`;
    mockAPI
      .onGet(url)
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(getFilmCommentAction(mockFilms[0].id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      getFilmCommentAction.pending.type,
      getFilmCommentAction.fulfilled.type
    ]);
  });
});


export function createMockFilms(count:number) {
  const films = [];
  for (let i = 0; i < count; i++) {
    films.push({id: i + 1, genre: 'comedy', name: `testFilm${i + 1}`, isFavorite:true} as Film);
  }
  return films;
}
