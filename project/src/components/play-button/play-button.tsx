import {Link} from 'react-router-dom';
import {PlayButtonIconAndText} from '../play-pause-button/play_button';

class PlayButtonProps {
  filmId: number | undefined;
}

export function PlayButton(props:PlayButtonProps) {
  return (
    <Link className="btn btn--play film-card__button" to={`/player/${props.filmId}`}>
      <PlayButtonIconAndText/>
    </Link>
  );
}
