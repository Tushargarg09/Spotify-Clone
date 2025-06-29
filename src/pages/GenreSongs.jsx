import { useParams } from 'react-router-dom';
import SongCard from '../components/SongCard';

const dummySongs = {
  pop: [],
  rock: [],
  chill: [],
  edm: [],
};

export default function GenreSongs() {
  const { genreId } = useParams();
  const songs = dummySongs[genreId] || [];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 capitalize">{genreId} Songs</h2>
      {songs.length === 0 ? (
        <p>No songs found for this genre.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {songs.map((song) => (
            <SongCard key={song.key} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}
