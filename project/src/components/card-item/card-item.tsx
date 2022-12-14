import {Link, useNavigate} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {Film} from '../../types/film';
import {useEffect, useState} from 'react';
import {FILM_ROUTE} from '../../constants';

interface CardProps {
  film: Film
  onMouseOver: (film: Film) => void;
}

function Card({film, onMouseOver}: CardProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isNeedVideoToPlay, setIsNeedVideoPlay] = useState(false);

  useEffect(() => {
    let needUpdate = true;
    if (isNeedVideoToPlay) {
      setTimeout(() => needUpdate && setIsVideoPlaying(true), 1000);
    }
    return () => {
      needUpdate = false;
    };
  }
  , [isNeedVideoToPlay]
  );

  const handleFilmCardMouseLeave = () => {
    setIsNeedVideoPlay(false);
    setIsVideoPlaying(false);
  };

  const navigate = useNavigate();
  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={() => {
        onMouseOver(film);
        setIsNeedVideoPlay(true);
      }}
      onMouseLeave={handleFilmCardMouseLeave}
      onClick={() => navigate(`${FILM_ROUTE}/${film.id}`)}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          film={film}
          muted
          width={280}
          height={175}
          isPlaying={isVideoPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${FILM_ROUTE}/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default Card;
