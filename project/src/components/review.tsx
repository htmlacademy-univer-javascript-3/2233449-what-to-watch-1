export type ReviewProps = {
  text: string,
  author: string,
  date: string,
  dateText: string,
  rating: string
}

function Review({text, author, date, dateText, rating}: ReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={date}>{dateText}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
