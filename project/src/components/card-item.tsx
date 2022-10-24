interface CardProps {
  imagePath: string;
  name: string;
  href: string;
}


function Card({imagePath, href, name}: CardProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imagePath}
          alt={name} width={280} height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={href}>{name}</a>
      </h3>
    </article>
  );
}

export default Card;
