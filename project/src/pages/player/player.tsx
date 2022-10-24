import {RenderPauseButton} from '../../components/play-pause-button/pause_button';
import {RenderPlayButton} from '../../components/play-pause-button/play_button';

function Player() {
  const isPlay = true;
  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"/>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
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
