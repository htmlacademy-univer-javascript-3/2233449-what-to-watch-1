import {PauseButtonIconAndText} from '../../components/play-pause-button/pause-button-icon-and-text';
import {PlayButtonIconAndText} from '../../components/play-pause-button/play-button-icon-and-text';
import {useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getCurrentFilm} from '../../store/film-reducer/selector';
import {FILM_ROUTE} from '../../constants';
import {Link} from 'react-router-dom';
import {getFilmInfoAction} from '../../api/api-action-film';
import moment from 'moment';

function Player() {
  const film = useAppSelector(getCurrentFilm);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    dispatch(getFilmInfoAction(Number(film?.id)));
  }, [dispatch, film?.id]);

  const handleIsPlayClick = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleFullScreenVideo = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  };

  const handleProgressBar = () => {
    const durationTime = videoRef?.current?.duration;
    const currentTime = videoRef?.current?.currentTime;

    if (durationTime && currentTime) {
      setProgress((currentTime / durationTime) * 100);
      setTimeLeft(durationTime - currentTime);
    }
  };

  const formatTime = (seconds: number) => {
    if (seconds / 60 / 60 >= 1) {
      return moment(seconds * 1000).format('-hh:mm:ss');}
    return moment(seconds * 1000).format('-mm:ss');
  };

  return (
    <div className="player">
      <video src={film?.videoLink} className="player__video" poster={film?.backgroundImage}
        ref={videoRef}
        onTimeUpdate={(event) => handleProgressBar()}
      />

      <Link type="button" className="player__exit" to={`${FILM_ROUTE}/${film?.id}`}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{(formatTime(timeLeft))}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleIsPlayClick}>
            {isPlaying ? PauseButtonIconAndText() : PlayButtonIconAndText()}
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen" onClick={handleFullScreenVideo}>
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
