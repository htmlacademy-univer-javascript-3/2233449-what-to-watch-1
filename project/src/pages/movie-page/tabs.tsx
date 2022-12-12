import {ActivePart} from './movie-page';
import {useAppSelector} from '../../hooks';
import ReviewCard from '../../components/review-card';
import {getCurrentFilm, getReviews} from '../../store/film-reducer/selector';

interface TabsProps {
  activePart: ActivePart
}

function Tabs({activePart}: TabsProps) {
  switch (activePart) {
    case ActivePart.OverviewPart:
      return <FilmInfo/>;
    case ActivePart.ReviewPart:
      return <FilmReviews/>;
    case ActivePart.DetailsPart:
      return <FilmDetails/>;
  }

}

function getStringRating(rating: number) {
  if (rating < 3) {
    return 'Bad';
  }
  if (rating < 5) {
    return 'Normal';
  }
  if (rating < 7) {
    return 'Good';
  }
  if (rating < 9) {
    return 'Very good';
  }
  return 'Awesome';
}

function FilmInfo() {
  const currentFilm = useAppSelector(getCurrentFilm);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm?.rating}</div>
        <p className="film-rating__meta">
          {currentFilm?.rating ?
            <span className="film-rating__level">{getStringRating(currentFilm?.rating)}</span> : null}

          <span className="film-rating__count">{currentFilm?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm?.description}</p>

        <p className="film-card__director"><strong>Director: {currentFilm?.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {currentFilm?.starring.join(', ').concat(' and other')}
          </strong>
        </p>
      </div>
    </>
  );
}

function FilmDetails() {
  const currentFilm = useAppSelector(getCurrentFilm);
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{currentFilm?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value"> {currentFilm?.starring.join('\r')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{currentFilm?.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{currentFilm?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{currentFilm?.genre}</span>
        </p>
      </div>
    </div>
  );
}

function FilmReviews() {
  const reviews = useAppSelector(getReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) =>
          (
            <ReviewCard key={review.id} comment={review?.comment} user={review?.user} date={review?.date}
              rating={review?.rating}
              id={review.id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Tabs;
