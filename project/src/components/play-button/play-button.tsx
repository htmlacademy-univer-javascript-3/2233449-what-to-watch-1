import {Link} from 'react-router-dom';
import {PlayButtonIconAndText} from '../play-pause-button/play-button-icon-and-text';
import {PLAYER_ROUTE} from '../../constants';

class PlayButtonProps {
  filmId: number | undefined;
}

export function PlayButton(props:PlayButtonProps) {
  return (
    <Link className="btn btn--play film-card__button" to={`${PLAYER_ROUTE}/${props.filmId}`}>
      <PlayButtonIconAndText/>
    </Link>
  );
}
