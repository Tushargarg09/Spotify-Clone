import { Link } from 'react-router-dom';
import { FaMusic, FaGuitar, FaSpa, FaHeadphones, FaRegLaughBeam } from 'react-icons/fa';

const genres = [
  {
    id: 'pop',
    name: 'Pop',
    icon: <FaRegLaughBeam className="text-3xl mb-2" />,
    color: 'from-pink-500 to-pink-400',
  },
  {
    id: 'rock',
    name: 'Rock',
    icon: <FaGuitar className="text-3xl mb-2" />,
    color: 'from-red-600 to-red-400',
  },
  {
    id: 'chill',
    name: 'Chill',
    icon: <FaSpa className="text-3xl mb-2" />,
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 'edm',
    name: 'EDM',
    icon: <FaHeadphones className="text-3xl mb-2" />,
    color: 'from-purple-600 to-purple-500',
  },
  {
    id: 'hiphop',
    name: 'Hip-Hop',
    icon: <FaMusic className="text-3xl mb-2" />,
    color: 'from-yellow-500 to-yellow-400',
  },
];

export default function Genres() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Browse by Genre</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            to={`/genres/${genre.id}`}
            className={`rounded-xl p-6 h-40 flex flex-col justify-end text-white font-semibold text-lg shadow-md bg-gradient-to-br ${genre.color} hover:scale-105 transform transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:ring-2 hover:ring-white/20 backdrop-blur-sm bg-opacity-80`}
          >
            {genre.icon}
            <span>{genre.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
