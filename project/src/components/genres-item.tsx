import { MouseEvent } from 'react';
import {changeGenre, getFilms} from '../store/action';
import {useAppDispatch} from '../hooks';

type GenresProps = {
  name: string,
  isActive: boolean
}

function GenresItem(props: GenresProps) {
  const dispatch = useAppDispatch();
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(changeGenre({genre: props.name}));
    dispatch(getFilms());
  };

  return (
    <li className={props.isActive ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
      <a href='#' className='catalog__genres-link' onClick={handleLinkClick}>{props.name}</a>
    </li>
  );
}

export default GenresItem;
