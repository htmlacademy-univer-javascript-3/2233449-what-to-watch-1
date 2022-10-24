import Card from '../../components/card-item';
import Logo from '../../components/logo';
import Footer from '../../components/footer';
import {Film} from '../../mocks/films';
import {Genre} from '../../mocks/genres';
import GenresItem from '../../components/genres-item';
import UserBlock from '../../components/user-block';
import FilmsList from '../../components/films-list';

export type MainProps = {
  films: Film[]
  genres: Genre[],
}

function Main(props: MainProps) {
  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src='img/bg-the-grand-budapest-hotel.jpg' alt='The Grand Budapest Hotel'/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <Logo className="logo__link"/>
          <UserBlock/>
        </header>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src='img/the-grand-budapest-hotel-poster.jpg' alt='The Grand Budapest Hotel poster'
                width='218' height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{props.films[0].name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{props.films[0].genre}</span>
                <span className='film-card__year'>{props.films[0].date}</span>
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
                  <span className='film-card__count'>9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            <GenresItem name={'All genres'} isActive/>
            {props.genres.map((genre) => <GenresItem name={genre.name} isActive={false}/>)}
          </ul>

          <FilmsList films={props.films}/>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Main;
