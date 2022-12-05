import Logo from '../../components/logo';
import Footer from '../../components/footer';
import UserBlock from '../../components/user-block';
import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import FilmsList from '../../components/films-list';
import Tabs from './tabs';
import {useAppSelector} from '../../hooks';
import {Review} from '../../types/review';
import NotFound from '../page-not-found/page-not-found';

export enum ActivePart {
  OverviewPart = 1,
  DetailsPart = 2,
  ReviewPart = 3
}

function MoviePage() {
  const params = useParams();
  const reviews: Review[] = []; //todo:сделать нормально
  const id = Number(params.id);
  const [activePagePart, setActivePagePart] = useState(ActivePart.OverviewPart);
  const film = useAppSelector((state) => state.films.find((f: { id: number; }) => f.id === id));
  const films = useAppSelector((state) => state.films);
  if (!film) {
    return <NotFound/>;
  } else {
    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film?.backgroundImage} alt={film?.name}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <Logo className="logo__link"/>
              <UserBlock/>
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film?.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film?.genre}</span>
                  <span className="film-card__year">{film?.released}</span>
                </p>

                <div className="film-card__buttons">
                  <Link className="btn btn--play film-card__button" to={`player/${film.id}`}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </Link>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"/>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">{films.length}</span>
                  </button>
                  <Link to={`/films/${id + 1}/review`} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film?.posterImage} alt={`${film?.name} poster`}
                  width="218" height="327"
                />
              </div>
              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li
                      className={activePagePart === ActivePart.OverviewPart ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                    >
                      <Link to="#" className="film-nav__link" onClick={() => setActivePagePart(ActivePart.OverviewPart)}>Overview</Link>
                    </li>
                    <li
                      className={activePagePart === ActivePart.DetailsPart ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                    >
                      <Link to="#" className="film-nav__link" onClick={() => setActivePagePart(ActivePart.DetailsPart)}>Details</Link>
                    </li>
                    <li
                      className={activePagePart === ActivePart.ReviewPart ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                    >
                      <Link to="#" className="film-nav__link" onClick={() => setActivePagePart(ActivePart.ReviewPart)}>Reviews</Link>
                    </li>
                  </ul>
                </nav>
                <Tabs activePart={activePagePart} film={film} reviews={reviews}/>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            {<FilmsList films={films}/>}
          </section>
          <Footer/>
        </div>
      </>
    );
  }
}

export default MoviePage;
