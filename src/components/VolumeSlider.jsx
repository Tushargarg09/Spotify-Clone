import { useRef } from 'react';
import { FaVolumeUp } from 'react-icons/fa';

export default function VolumeSlider({ onChange }) {
  const volumeRef = useRef();

  return (
    <div className="flex items-center gap-2 text-white">
      <FaVolumeUp />
      <input
        type="range"
        ref={volumeRef}
        min="0"
        max="1"
        step="0.01"
        defaultValue="1"
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-24 h-1 bg-gray-700 rounded"
      />
    </div>
  );
}
