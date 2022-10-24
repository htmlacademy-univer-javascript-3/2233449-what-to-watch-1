import Card from './card-item';
import {FilmsProps} from '../pages/my-list/my-list';

function FilmsList(props: FilmsProps) {
  return (
    <div className="catalog__films-list">
      {props.films.map((film: { imagePath: string; name: string; }) =>
        <Card imagePath={film.imagePath} href='film-page.html' name={film.name}/>)}
    </div>
  );
}
export default FilmsList;
