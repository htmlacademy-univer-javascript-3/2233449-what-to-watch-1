import {RenderPauseButton} from '../../components/play-pause-button/pause_button';
import {RenderPlayButton} from '../../components/play-pause-button/play_button';
import {FilmsProps} from '../my-list/my-list';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

function Player({films}: FilmsProps) {
  const params = useParams();
  const id = Number(params.id) - 1;
  const [isPlay, setIsPlay] = useState(true);
  return (
    <div className="player">
      <video src={films[id]?.videoLink} className="player__video" poster={films[id]?.imagePath}/>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{films[id]?.runTime}</div>
        </div>

        <div className="player__controls-row">
          {isPlay ? RenderPlayButton() : RenderPauseButton()}
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
