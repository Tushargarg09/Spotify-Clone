import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Search from './pages/Search';
import MusicPlayer from './components/MusicPlayer';
import Playlists from './pages/Playlists';
import mockSongs from './data/mockSongs';
import Genres from './pages/Genres';
import GenreSongs from './pages/GenreSongs';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-black text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto p-6 bg-black">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/genres/:genreId" element={<GenreSongs />} />

            </Routes>
          </main>

          <div className="bg-neutral-900 p-4 border-t border-neutral-700">
            <MusicPlayer songs={mockSongs} />

          </div>
        </div>
      </div>
    </Router>
  );
}
