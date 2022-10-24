import Review, {ReviewProps} from '../../components/review';
import {Film} from '../../mocks/films';


export default function renderActivePart(activePart: string, film:Film, reviews: ReviewProps[]) {
  switch (activePart) {
    case 'overview':
      return renderInfo(film);
    case 'review':
      return renderReviews(reviews);
    case 'details':
      return renderDetails(film);
  }

}

function renderInfo(film: Film) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.ratingString}</span>
          <span className="film-rating__count">{film.ratingCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring}
            and other
          </strong>
        </p>
      </div>
    </>
  );
}

function renderDetails(film: Film) {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value"> {film.starring.join('\r')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{film.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
      </div>
    </div>
  );
}

function renderReviews(reviews: ReviewProps[]) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) =>
          (<Review text={review.text} author={review.author} date={review.date}
            dateText={review.dateText} rating={review.rating}
          />))}
      </div>
    </div>
  );
}
