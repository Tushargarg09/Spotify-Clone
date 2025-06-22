import mockSongs from '../data/mockSongs';
import SongCard from '../components/SongCard';

export default function Home() {
  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Top Tracks</h2>
      {mockSongs.map((song) => (
        <SongCard key={song.key} song={song} />
      ))}
    </div>
  );
}
