import { useState } from 'react';
import mockSongs from '../data/mockSongs';
import SongCard from '../components/SongCard';

export default function Search() {
  const [query, setQuery] = useState('');

  const filtered = mockSongs.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase()) ||
    song.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by song or artist..."
        className="w-full p-2 rounded bg-lightDark text-white placeholder-gray-400 mb-4"
      />
      {filtered.map((song) => (
        <SongCard key={song.key} song={song} />
      ))}
    </div>
  );
}
