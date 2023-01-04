import {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {postCommentAction} from '../../api/api-action-film';
import {FILM_ROUTE} from '../../constants';
import {getCurrentFilm} from '../../store/film-reducer/selector';

function ReviewForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentFilm = useAppSelector(getCurrentFilm);
  const [stars, setStars] = useState(0);
  const [text, setText] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const onSubmit = (comment: string, rating: number) => {
    dispatch(postCommentAction({comment: comment, rating: rating, filmId: currentFilm?.id}))
      .then(() => {setIsDisabled(false); navigate(`${FILM_ROUTE}/${currentFilm?.id}`);})
      .catch((err)=>{setIsDisabled(false); setErrorText(err.message);});
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsDisabled(true);
    if (text && stars) {
      onSubmit(text, stars);
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).reverse().map((j) => (
              <>
                <input key={j + 1} className="rating__input" id={`star-${j + 1}`} type="radio" name="rating"
                  value={j + 1}
                  checked={stars === j + 1}
                  onChange={(() => {
                    setStars(j + 1);
                  })}
                />
                <label className="rating__label" htmlFor={`star-${j + 1}`}>Rating {j + 1}</label>
              </>
            )
            )
          }
        </div>
      </div>
      <p>{errorText}</p>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          value={text} onChange={(event) => {
            const currentText = event.target.value;
            setText(currentText);
          }}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit"
            disabled={isDisabled || !(text.length >= 50 && text.length <= 400 && stars > 0)}
          >Post
          </button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
