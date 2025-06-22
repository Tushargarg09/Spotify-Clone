import { FaPlay, FaPause } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSong, playPause } from '../redux/playerSlice';

export default function SongCard({ song }) {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const isCurrentSong = activeSong?.key === song.key;

  const handleTogglePlay = () => {
    dispatch(setActiveSong(song));
    dispatch(playPause(!isCurrentSong || !isPlaying));
  };

  return (
    <div className="flex items-center justify-between bg-[#181818] p-4 rounded-lg mb-4 hover:bg-[#282828] transition duration-300 shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={song.cover || 'https://via.placeholder.com/64?text=No+Cover'}
          alt={song.title}
          className="w-16 h-16 rounded-md object-cover"
        />
        <div>
          <h3 className="text-white text-lg font-semibold truncate max-w-[200px]">
            {song.title}
          </h3>
          <p className="text-gray-400 text-sm truncate max-w-[200px]">
            {song.artist}
          </p>
        </div>
      </div>

      <button
        onClick={handleTogglePlay}
        className="bg-spotify hover:bg-green-500 text-white p-3 rounded-full shadow-lg transition"
      >
        {isCurrentSong && isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}
