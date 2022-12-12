import Logo from '../../components/logo';
import Footer from '../../components/footer';
import UserBlock from '../../components/user-block';
import FilmsList from '../../components/films-list';
import GenresList from '../../components/genres-list';
import {useAppSelector} from '../../hooks';
import ShowMoreButton from '../../components/show-more-button';
import {useState} from 'react';
import {PlayButton} from '../../components/play-button';
import {MyListButton} from '../../components/my-list-button';
import {getFilms} from '../../store/data-reducer/selector';
import {getCurrentGenre} from '../../store/genre-reducer/selector';

function Main() {
  const currentGenre = useAppSelector(getCurrentGenre);
  const films = useAppSelector(getFilms);
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
                <PlayButton filmId={films[0].id + 1}/>
                <MyListButton length={films.length}/>
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
