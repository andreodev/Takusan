import { motion } from "framer-motion";
import { AnimeCard } from "./components/AnimeCard";
import Top100 from "./components/Top100";
import { useTrendingAnimes } from "./hooks/useFetch";

export function HomeView() {
  const { animes, loading } = useTrendingAnimes();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="px-4 sm:px-6 py-10 max-w-7xl mx-auto">
      <motion.h1
        className="text-2xl sm:text-3xl font-bold mb-8 text-white flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span>🔥</span> Em alta agora
      </motion.h1>

      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-zinc-800 rounded-lg overflow-hidden"
              >
                <div className="h-52 sm:h-60 w-full bg-zinc-700" />
                <div className="p-2 space-y-2">
                  <div className="h-4 w-3/4 bg-zinc-700 rounded" />
                  <div className="h-3 w-1/2 bg-zinc-700 rounded" />
                </div>
              </div>
            ))
          : animes.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
      </motion.div>

      <div className="mt-16 px-1 sm:px-0">
        <Top100 />
      </div>
    </div>
  );
}
