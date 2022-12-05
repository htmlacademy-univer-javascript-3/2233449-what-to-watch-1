import Logo from '../../components/logo';
import Footer from '../../components/footer';
import UserBlock from '../../components/user-block';
import FilmsList from '../../components/films-list';
import GenresList from '../../components/genres-list';
import {useAppSelector} from '../../hooks';
import ShowMoreButton from '../../components/show-more-button';
import {useState} from 'react';

function Main() {
  const { currentGenre, films } = useAppSelector((state) => state);
  const filteredFilms = currentGenre === 'All genres' ? films : films.filter((film) => film.genre === currentGenre);
  const genres = [...new Set(films.map((film) => film.genre))];
  genres.unshift('All genres');

  const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(8);
  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src={films[0].backgroundImage} alt={films[0].name}/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <Logo className="logo__link"/>
          <UserBlock/>
        </header>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src={films[0].posterImage} alt={films[0].posterImage}
                width='218' height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{films[0].name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{films[0].genre}</span>
                <span className='film-card__year'>{films[0].released}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'/>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>{films.length}</span>
                </button>
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

          <ShowMoreButton isVisible={filteredFilms.length > visibleFilmsCount} setVisibleFilmsCount={setVisibleFilmsCount}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Main;
