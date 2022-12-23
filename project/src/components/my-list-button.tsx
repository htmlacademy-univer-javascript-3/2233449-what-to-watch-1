import {useAppDispatch, useAppSelector} from '../hooks';
import {
  getFilmInfoAction,
  setFavoriteFilmAction
} from '../api-action';
import {getCurrentFilm, getFavoriteFilms} from '../store/film-reducer/selector';


export function MyListButton() {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const currentFilm = useAppSelector(getCurrentFilm);

  return (
    <button className='btn btn--list film-card__button' type='button' onClick={() => {
      const status = Number(!currentFilm?.isFavorite);
      dispatch(setFavoriteFilmAction({filmId: Number(currentFilm?.id), status: status}));
      dispatch(getFilmInfoAction(currentFilm?.id as number));
    }}
    >
      <svg viewBox='0 0 19 20' width='19' height='20'>
        <use xlinkHref={currentFilm?.isFavorite ? '#in-list' : '#add'}/>
      </svg>
      <span>My list</span>
      <span className='film-card__count'>{favoriteFilms.length}</span>
    </button>
  );
}
