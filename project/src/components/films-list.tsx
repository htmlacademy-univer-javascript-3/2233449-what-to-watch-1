import Card from './card-item';
import {FilmsProps} from '../pages/my-list/my-list';
import {useState} from 'react';

function FilmsList(props: FilmsProps) {
  const [activeFilm, setActiveFilm] = useState(1);
  return (
    <div className="catalog__films-list">
      {props.films.map((film: { imagePath: string; name: string; id:number }) =>
        <Card key={film.id} imagePath={film.imagePath} name={film.name} id={film.id}/>)}
    </div>
  );
}
export default FilmsList;
