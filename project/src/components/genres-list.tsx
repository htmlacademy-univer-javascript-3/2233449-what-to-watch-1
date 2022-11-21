import GenresItem from './genres-item';
import {Genre} from '../mocks/genres';

export type GenresListProps = {
  genres: Genre[],
  activeGenre: string
}

function GenresList({genres, activeGenre}: GenresListProps) {

  return (
    <ul className='catalog__genres-list'>
      {
        genres.map((genre) => <GenresItem key={genre.id} name={genre.name} isActive={genre.name === activeGenre}/>)
      }
    </ul>
  );
}

export default GenresList;
