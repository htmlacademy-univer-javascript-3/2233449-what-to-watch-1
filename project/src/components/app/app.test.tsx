import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import App from './app';
import {ALL_GENRES, AuthorizationStatus, LOGIN_ROUT} from '../../constants';
import {MemoryRouter} from 'react-router-dom';
import {createMockFilms} from '../../api/api-action.test';

const mockStore = configureMockStore();
const mockFilms = createMockFilms(2);
const store = mockStore({
  user: {authorizationStatus: AuthorizationStatus.Auth},
  data: {films: mockFilms, isDataLoaded: true},
  films: {reviews: [], similarFilms: [], currentFilm: mockFilms[0], favoriteFilms: [], promoFilm: mockFilms[0]},
  genre: {currentGenre: ALL_GENRES}
});

const initialEntries = ['/'];

const fakeApp = (
  <Provider store={store}>
    <MemoryRouter initialEntries={initialEntries}>
      <App/>
    </MemoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    render(fakeApp);

    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText(`${ALL_GENRES}`)).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    const localStore = mockStore({
      user: {authorizationStatus: AuthorizationStatus.NoAuth},
      data: {films: mockFilms, isDataLoaded: true},
      films: {reviews: [], similarFilms: [], currentFilm: mockFilms[0], favoriteFilms: [], promoFilm: mockFilms[0]},
      genre: {currentGenre: ALL_GENRES}
    });
    const localFakeApp = (
      <Provider store={localStore}>
        <MemoryRouter initialEntries={initialEntries}>
          <App/>
        </MemoryRouter>
      </Provider>
    );
    initialEntries[0] = LOGIN_ROUT;
    render(localFakeApp);

    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    initialEntries[0] = '/notfoundroute';
    render(fakeApp);

    expect(screen.getByText('404 Page Not Found')).toBeInTheDocument();
  });
});
