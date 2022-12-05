import GenresItem from './genres-item';
import {Genre} from '../mocks/genres';
import {Dispatch, SetStateAction} from 'react';

export type GenresListProps = {
  genres: Genre[],
  activeGenre: string,
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>
}

function GenresList({genres, activeGenre, setVisibleFilmsCount}: GenresListProps) {


  return (
    <ul className='catalog__genres-list'>
      {
        genres.map((genre) => <GenresItem key={genre.id} name={genre.name} isActive={genre.name === activeGenre} setVisibleFilmsCount={setVisibleFilmsCount}/>)
      }
    </ul>
  );
}

export default GenresList;
