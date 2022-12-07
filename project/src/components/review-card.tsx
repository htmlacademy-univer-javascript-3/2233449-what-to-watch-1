import {Review} from '../types/review';


function ReviewCard({id, comment, user, date, rating}: Review) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{new Date(date).toUTCString().split(' ').slice(1, 4).join(' ')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewCard;
