import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GenrerOverlay } from "./GenrerOverlay";

export function AnimeCard({ anime }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-lg overflow-hidden cursor-pointer flex flex-col "
      style={{ maxHeight: "420px" }}
    >
      <Link to={`/anime/${anime.id}`}>
        <div className="relative w-full h-60 overflow-hidden">
          <motion.img
            src={anime.coverImage.large}
            alt={anime.title.romaji}
            className="w-full h-full object-cover rounded-t-lg"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <GenrerOverlay genres={anime.genres} isVisible={isHovered} />
        </div>

        <div className="p-2 flex flex-col flex-grow rounded-b-lg">
          <h2 className="text-lg font-extralight mb-4 break-words line-clamp-2 text-white text-start">
            {anime.title.english || anime.title.romaji}
          </h2>
        </div>
      </Link>
    </motion.div>
  );
}
