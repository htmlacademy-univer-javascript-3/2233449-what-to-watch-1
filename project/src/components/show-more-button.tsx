import {Dispatch, SetStateAction} from 'react';
import {VISIBLE_FILMS_COUNT} from '../constants';

type ShowMoreProps = {
  isVisible: boolean,
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>
}


function ShowMoreButton(props: ShowMoreProps) {
  const {isVisible, setVisibleFilmsCount} = props;
  return (
    <div className='catalog__more' style={{display: isVisible ? 'block' : 'none'}}>
      <button className='catalog__button' type='button' onClick={() => setVisibleFilmsCount((prev) => prev + VISIBLE_FILMS_COUNT)}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
