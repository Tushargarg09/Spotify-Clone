import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { playPause } from '../redux/playerSlice';

export default function MusicPlayer() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [isPlaying, activeSong]);

  const handleTimeUpdate = () => {
    const current = audioRef.current?.currentTime || 0;
    const duration = audioRef.current?.duration || 1;
    setProgress((current / duration) * 100);
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
        <div className="flex justify-center items-center">
        <div className="flex items-center gap-6">
          <button className="text-white text-lg"><FaStepBackward /></button>
          <button
            onClick={() => dispatch(playPause(!isPlaying))}
            className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="text-white text-lg"><FaStepForward /></button>
        </div>
      </div>
        <div className="w-1/3 text-right text-gray-400 text-sm hidden md:block">
      
    </div>
      </div>

      <div className="w-full h-1 bg-gray-700 rounded overflow-hidden">
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
