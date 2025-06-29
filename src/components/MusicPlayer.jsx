import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { playPause, setActiveSong } from '../redux/playerSlice';
import VolumeSlider from './VolumeSlider';

export default function MusicPlayer({ songs }) {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [isPlaying, activeSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    const current = audioRef.current?.currentTime || 0;
    const total = audioRef.current?.duration || 0;
    setCurrentTime(current);
    setDuration(total);
    setProgress((current / total) * 100);
  };

  const handleSeek = (e) => {
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (clickX / width) * duration;
  };

  const formatTime = (time) =>
    `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(2, '0')}`;

  const handleSkip = (direction) => {
    if (!activeSong || !songs) return;
    const currentIndex = songs.findIndex(song => song.key === activeSong.key);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % songs.length;
    } else if (direction === 'prev') {
      newIndex = (currentIndex - 1 + songs.length) % songs.length;
    }

    dispatch(setActiveSong(songs[newIndex]));
    dispatch(playPause(true));
  };

  if (!activeSong?.title) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] p-4 flex flex-col gap-2 border-t border-gray-800 z-50">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 w-1/3">
          <img
            src={activeSong.cover}
            alt={activeSong.title}
            className="w-14 h-14 object-cover rounded"
          />
          <div>
            <h3 className="text-white font-semibold">{activeSong.title}</h3>
            <p className="text-gray-400 text-sm">{activeSong.artist}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <button onClick={() => handleSkip('prev')} className="text-white text-lg">
              <FaStepBackward />
            </button>

            <button
              onClick={() => dispatch(playPause(!isPlaying))}
              className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button onClick={() => handleSkip('next')} className="text-white text-lg">
              <FaStepForward />
            </button>
          </div>

          <div className="flex justify-between text-sm text-gray-400 w-full px-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="w-1/3 flex justify-end">
          <VolumeSlider onChange={setVolume} />
        </div>
      </div>

      <div
        className="w-full h-1 bg-gray-700 rounded cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="h-full bg-spotify transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <audio
        ref={audioRef}
        src={activeSong.audio}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}
