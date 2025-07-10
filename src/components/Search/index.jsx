import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchAnime } from "../../services/Anilist";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="relative w-full max-w-md mx-auto">
      {/* Input */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full py-2 pl-4 pr-10 rounded-md bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-400"
        placeholder="🔍 Buscar anime..."
      />

      {/* Loader */}
      {loading && (
        <div className="absolute top-full left-0 w-full px-4 py-2 text-sm text-zinc-400">
          <div className="animate-pulse">Carregando resultados...</div>
        </div>
      )}

      {/* Resultados */}
      <AnimatePresence>
        {!loading && results.length > 0 && (
          <motion.ul
            className="absolute top-full mt-1 left-0 w-full bg-zinc-900 text-white shadow-lg rounded-md z-10 max-h-64 overflow-y-auto border border-zinc-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {results.map((anime) => (
              <motion.li
                key={anime.id}
                onClick={() => handleSelect(anime.id)}
                className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 cursor-pointer transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <img
                  src={anime.coverImage.large}
                  alt={anime.title.romaji}
                  className="w-10 h-14 object-cover rounded"
                />
                <span className="text-sm">
                  {anime.title.english || anime.title.romaji}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
