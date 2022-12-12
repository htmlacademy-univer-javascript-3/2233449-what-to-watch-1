import {Dispatch, MouseEvent, SetStateAction} from 'react';
import {useAppDispatch} from '../hooks';
import {VISIBLE_FILMS_COUNT} from '../constants';
import {changeGenre} from '../store/genre-reducer/genre-reducer';

type GenresProps = {
  name: string,
  isActive: boolean,
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>
}

function GenresItem(props: GenresProps) {
  const dispatch = useAppDispatch();
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(changeGenre({currentGenre: props.name}));
    props.setVisibleFilmsCount(VISIBLE_FILMS_COUNT);
  };

  return (
    <li className={props.isActive ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
      <a href='#todo' className='catalog__genres-link' onClick={handleLinkClick}>{props.name}</a>
    </li>
  );
}

export default GenresItem;
