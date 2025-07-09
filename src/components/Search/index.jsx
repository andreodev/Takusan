import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchAnime } from "../../services/Anilist";

export function AnimeSearch() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!input.trim()) {
      setResults([]);
      return;
    }

    const delay = setTimeout(() => {
      setLoading(true);
      searchAnime(input)
        .then(setResults)
        .finally(() => setLoading(false));
    }, 400);

    return () => clearTimeout(delay);
  }, [input]);

  const handleSelect = (id) => {
    setInput("");
    setResults([]);
    navigate(`/anime/${id}`);
  };

  return (
    <div className="relative w-full max-w-xs">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full py-2 pl-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Buscar anime..."
      />
      {loading && <div className="absolute top-full left-0 text-sm px-3 py-2">🔍 Buscando...</div>}

      {results.length > 0 && (
        <ul className="absolute top-full mt-1 left-0 w-full bg-white text-black shadow-lg rounded-md z-10 max-h-64 overflow-y-auto">
          {results.map((anime) => (
            <li
              key={anime.id}
              onClick={() => handleSelect(anime.id)}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img src={anime.coverImage.large} alt={anime.title.romaji} className="w-10 h-14 object-cover rounded" />
              <span className="text-sm">
                {anime.title.english || anime.title.romaji}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
