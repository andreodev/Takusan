import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Top100() {
  const [animes, setAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchTopAnimes = async () => {
      const query = `
        query {
          Page(perPage: 100) {
            media(type: ANIME, sort: SCORE_DESC) {
              id
              title {
                romaji
                english
              }
              coverImage {
                large
              }
              genres
              averageScore
              startDate {
                year
              }
            }
          }
        }
      `;

      const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const { data } = await response.json();
      setAnimes(data.Page.media);
    };

    fetchTopAnimes();
  }, []);

  const totalPages = Math.ceil(animes.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentAnimes = animes.slice(startIndex, startIndex + perPage);

  return (
    <div className="px-4 sm:px-6 py-10 max-w-4xl mx-auto">
      <motion.h2
        className="text-2xl font-bold mb-6 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🏆 Top 100 Animes Mais Bem Avaliados
      </motion.h2>

      <ul className="space-y-4">
        {currentAnimes.map((anime, index) => {
          const rank = startIndex + index + 1;

          return (
            <motion.li
  key={anime.id}
  className="relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.3 }}
>
  {rank <= 3 && (
    <motion.div
      className="absolute -top-2 -left-2 text-yellow-300 text-xl"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: [1, 1.5, 1], rotate: 360 }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
    >
      🎆
    </motion.div>
  )}

  <span className="text-2xl font-bold text-yellow-400 w-8 flex-shrink-0">
    #{rank}
  </span>

  <Link
    to={`/anime/${anime.id}`}
    className="flex items-center gap-4 flex-1 min-w-0"
  >
    <img
      src={anime.coverImage.large}
      alt={anime.title.romaji}
      className="w-24 sm:w-16 h-36 sm:h-24 object-cover rounded flex-shrink-0"
    />
    <div className="min-w-0">
      <h3 className="text-white text-lg font-medium break-words">
        {anime.title.english || anime.title.romaji}
      </h3>
      <p className="text-sm text-zinc-400 truncate break-words">
        ⭐ Score: {anime.averageScore ?? "N/A"} • 📅 {anime.startDate?.year ?? "Ano desconhecido"}
      </p>
      <p className="text-xs text-zinc-500 line-clamp-1 break-words">
        {anime.genres.join(", ")}
      </p>
    </div>
  </Link>
</motion.li>
          );
        })}
      </ul>

      <div className="flex flex-wrap justify-center mt-8 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-zinc-700 text-white rounded disabled:opacity-50 cursor-pointer"
        >
          Anterior
        </button>
        <span className="text-white px-2">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-zinc-700 text-white rounded disabled:opacity-50 cursor-pointer"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
