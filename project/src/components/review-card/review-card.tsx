import {Review} from '../../types/review';
import moment from 'moment';


function ReviewCard({id, comment, user, date, rating}: Review) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{moment(date).format('MMMM DD, YYYY')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewCard;
