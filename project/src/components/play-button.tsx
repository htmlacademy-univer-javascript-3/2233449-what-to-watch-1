import {Link} from 'react-router-dom';

class PlayButtonProps {
  filmId: number | undefined;
}

export function PlayButton(props:PlayButtonProps) {
  return (
    <Link className="btn btn--play film-card__button" to={`/player/${props.filmId}`}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </Link>
  );
}
