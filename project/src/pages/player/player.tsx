import {PauseButtonIconAndText} from '../../components/play-pause-button/pause_button';
import {PlayButtonIconAndText} from '../../components/play-pause-button/play_button';
import {useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getCurrentFilm} from '../../store/film-reducer/selector';
import {MAIN_ROUTE} from '../../constants';
import {Link, useParams} from 'react-router-dom';
import {getFilmInfoAction} from '../../api/api-action-film';

function Player() {
  const film = useAppSelector(getCurrentFilm);
  const [isPlaying, setIsPlaying] = useState(false);
  const params = useParams();
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    dispatch(getFilmInfoAction(Number(params?.id)));

    if (videoRef.current === null) {
      return;
    }

    if (!isPlaying) {
      videoRef.current.load();
    }
  }, [params.id, dispatch, isPlaying]);

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
    const date = new Date(seconds * 1000);
    let format = date.toISOString().slice(11, 19).toString();
    if (format.startsWith('00')) {
      format = format.substring(3);
    }
    return `-${format}`;
  };

  return (
    <div className="player">
      <video src={film?.videoLink} className="player__video" poster={film?.backgroundImage}
        ref={videoRef}
        onTimeUpdate={(event) => handleProgressBar()}
      />

      <Link type="button" className="player__exit" to={MAIN_ROUTE}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTime(Number(timeLeft))}</div>
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
