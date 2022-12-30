import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import {useAppSelector} from '../../hooks';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import {useState} from 'react';
import {PlayButton} from '../../components/play-button/play-button';
import {MyListButton} from '../../components/my-list-button/my-list-button';
import {getFilms} from '../../store/data-reducer/selector';
import {getCurrentGenre} from '../../store/genre-reducer/selector';
import {getPromoFilm} from '../../store/film-reducer/selector';
import {AuthorizationStatus} from '../../constants';
import {getAuthorizationStatus} from '../../store/user-reducer/selector';

function Main() {
  const currentGenre = useAppSelector(getCurrentGenre);
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const filteredFilms = currentGenre === 'All genres' ? films : films.filter((film) => film.genre === currentGenre);
  const genres = [...new Set(films.map((film) => film.genre))];
  genres.unshift('All genres');

  const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(8);
  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name}/>
        </div>

        <header className='page-header film-card__head'>
          <Logo className="logo__link"/>
          <UserBlock/>
        </header>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src={promoFilm?.posterImage} alt={promoFilm?.name}
                width='218' height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{promoFilm?.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{promoFilm?.genre}</span>
                <span className='film-card__year'>{promoFilm?.released}</span>
              </p>

              <div className='film-card__buttons'>
                <PlayButton filmId={promoFilm?.id}/>
                {
                  authorizationStatus === AuthorizationStatus.Auth ?
                    <MyListButton/>
                    : null
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <GenresList genres={genres} activeGenre={currentGenre} setVisibleFilmsCount={setVisibleFilmsCount}/>

          <FilmsList films={filteredFilms.slice(0, visibleFilmsCount)}/>

          <ShowMoreButton isVisible={filteredFilms.length > visibleFilmsCount}
            setVisibleFilmsCount={setVisibleFilmsCount}
          />
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Main;
