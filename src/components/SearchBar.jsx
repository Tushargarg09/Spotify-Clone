export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search songs or artists"
      className="w-full p-2 border rounded mt-4"
    />
  );
}
