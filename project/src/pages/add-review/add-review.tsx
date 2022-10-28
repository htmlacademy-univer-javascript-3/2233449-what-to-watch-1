import Logo from '../../components/logo';
import UserBlock from '../../components/user-block';
import ReviewForm from '../../components/review-form';
import {FilmsProps} from '../my-list/my-list';
import {useParams} from 'react-router-dom';

function AddReview({films}: FilmsProps) {
  const params = useParams();
  const id = Number(params.id) - 1;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={films[id]?.imagePath} alt={films[id]?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo className="logo__link"/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{films[id]?.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={films[id]?.imagePath} alt={films[id]?.name} width="218"
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
