import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
<div className="w-60 h-screen bg-lightDark p-6">
  <h1 className="text-2xl font-bold text-white mb-10">Spotify</h1>
  <nav className="flex flex-col gap-6 text-white text-lg">
    <Link to="/" className="hover:text-spotify">Home</Link>
    <Link to="/search" className="hover:text-spotify">Search</Link>
    <Link to="/playlists" className="hover:text-spotify">Playlists</Link>
    <Link to="/genres" className="hover:text-green-400">Genres</Link>
  </nav>
</div>

  );
}
