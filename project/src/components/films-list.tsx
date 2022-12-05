import Card from './card-item';
import {FilmsProps} from '../pages/my-list/my-list';
import {useState} from 'react';
import {Film} from '../types/film';

function FilmsList(props: FilmsProps) {
  const [activeFilm, setActiveFilm] = useState<Film | null>(null);

  const handleMouseOver = (film: Film) => {
    if (film !== activeFilm) {
      setActiveFilm(film);
    }
  };
  return (
    <div className="catalog__films-list">
      {props.films.map((film: Film) =>
        <Card key={film.id} film={film} onMouseOver={handleMouseOver}/>)}
    </div>
  );
}

export default FilmsList;
