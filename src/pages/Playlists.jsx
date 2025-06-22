import mockPlaylists from '../data/mockPlaylists';
import { FaPlay } from 'react-icons/fa';

export default function Playlists() {
    console.log(mockPlaylists);
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">Your Playlists</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPlaylists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition group cursor-pointer"
          >
            <img
              src={playlist.cover}
              alt={playlist.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">{playlist.name}</h3>
            <p className="text-sm text-gray-400">{playlist.description}</p>

            <button className="mt-4 p-2 rounded-full bg-spotify hover:bg-green-500 transition text-white">
              <FaPlay />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
