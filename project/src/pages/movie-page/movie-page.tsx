import Logo from '../../components/logo';
import renderActivePart from './render-active-part';
import Footer from '../../components/footer';
import UserBlock from '../../components/user-block';
import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import FilmsList from '../../components/films-list';
import {Film} from '../../mocks/films';
import {Review} from '../../mocks/reviews';

export enum ActivePart {
  OverviewPart = 1,
  DetailsPart = 2,
  ReviewPart = 3
}

export type MoviePageProps = {
  films: Film[],
  reviews: Review[]
}

function MoviePage({films, reviews}: MoviePageProps) {
  const params = useParams();
  const id = Number(params.id) - 1;
  const [activePagePart, setActivePagePart] = useState(ActivePart.OverviewPart);
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={films[id]?.bgImagePath} alt={films[id]?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo className="logo__link"/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{films[id]?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[id]?.genre}</span>
                <span className="film-card__year">{films[id]?.date}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
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
              <img src={films[id]?.imagePath} alt={`${films[id]?.name} poster`}
                width="218" height="327"
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li
                    className={activePagePart === ActivePart.OverviewPart ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                  >
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li
                    className={activePagePart === ActivePart.DetailsPart ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                  >
                    <Link to="#" className="film-nav__link">Details</Link>
                  </li>
                  <li
                    className={activePagePart === ActivePart.ReviewPart ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                  >
                    <Link to="#" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>
              {renderActivePart(activePagePart, films[id], reviews)}
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

export default MoviePage;
