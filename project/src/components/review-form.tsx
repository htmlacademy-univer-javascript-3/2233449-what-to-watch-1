import {useState} from 'react';

function ReviewForm() {
  const [stars, setStars] = useState(0);
  const [text, setText] = useState('');

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).reverse().map((j) => (
              <>
                <input className="rating__input" id={`star-${j + 1}`} type="radio" name="rating" value={j + 1} checked={stars === j + 1}
                  onChange={(() => setStars(j + 1))}
                />
                <label className="rating__label" htmlFor={`star-${j + 1}`}>Rating {j + 1}</label>
              </>
            )
            )
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          value={text} onChange={(event) => setText(event.target.value)}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
