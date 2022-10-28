import {Link} from 'react-router-dom';

interface CardProps {
  imagePath: string,
  name: string,
  id: number
}


function Card({imagePath, name, id}: CardProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imagePath}
          alt={name} width={280} height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default Card;
