interface CardProps {
  image: ImageProps;
  name: string;
  href: string;
}

interface ImageProps {
  imageName: string;
  alt: string;
  width: string;
  height: string;
}

function Card({image, href, name}: CardProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={image.imageName}
          alt={image.alt} width={image.width} height={image.height}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={href}>{name}</a>
      </h3>
    </article>
  );
}

export default Card;
