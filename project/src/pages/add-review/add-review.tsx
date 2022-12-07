import Logo from '../../components/logo';
import UserBlock from '../../components/user-block';
import ReviewForm from '../../components/review-form';
import {useAppSelector} from '../../hooks';

function AddReview() {
  const {currentFilm} = useAppSelector((state) => state);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm?.backgroundImage} alt={currentFilm?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo className="logo__link"/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{currentFilm?.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#todo" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm?.posterImage} alt={currentFilm?.name} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm/>
      </div>

    </section>
  );
}

export default AddReview;
