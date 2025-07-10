import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


import {
  Star,
  ArrowLeft,
  Film,
  Clock,
  ExternalLink,
  Users,
} from "lucide-react";

import { Trailer } from "./components/Trailer";
import { InfoItem } from "./components/InfoItem";
import { Genres } from "./components/Genres";
import { Characters } from "./components/Characters";
import { Relations } from "./components/Relations";
import { FavoriteButton } from "./components/FavoriteButton";
import { useAnime } from "./hooks/useFetch";

function formatSeason(season) {
  switch (season) {
    case "WINTER":
      return "Inverno";
    case "SPRING":
      return "Primavera";
    case "SUMMER":
      return "Verão";
    case "FALL":
      return "Outono";
    default:
      return "";
  }
}

export default function AnimePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { anime, loading, error } = useAnime(id);

  if (loading) {
    return (
      <div className="p-6 max-w-5xl mx-auto animate-pulse">
        <div className="h-72 w-48 bg-zinc-700 rounded mb-4" />
        <div className="h-6 w-3/4 bg-zinc-700 rounded mb-2" />
        <div className="h-4 w-full bg-zinc-700 rounded mb-1" />
        <div className="h-4 w-5/6 bg-zinc-700 rounded mb-1" />
        <div className="h-4 w-2/3 bg-zinc-700 rounded mb-1" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 max-w-5xl mx-auto text-red-500">
        Erro ao carregar dados: {error.message}
      </div>
    );
  }

  if (!anime) return null;

  return (
    <motion.div
      className="p-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
    >
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mb-6 text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition cursor-pointer"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      <div className="flex flex-col lg:flex-row gap-8 bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-800">
        {/* Imagem e Favorito */}
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <img
            src={anime.coverImage.large}
            alt={anime.title.romaji}
            className="w-64 rounded-lg shadow-md mb-3"
          />
          <FavoriteButton />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 text-white flex flex-col">
          <h1 className="text-4xl font-bold mb-1">
            {anime.title.english || anime.title.romaji}
          </h1>
          <h2 className="text-lg text-zinc-400 italic mb-4">{anime.title.romaji}</h2>

          {/* Trailer */}
          <Trailer trailer={anime.trailer} />

          <div
            className="text-zinc-300 text-sm leading-relaxed mb-6 space-y-2"
            dangerouslySetInnerHTML={{ __html: anime.description }}
          />

          {/* Info rápida */}
          <div className="flex flex-wrap gap-6 mb-6">
            <InfoItem icon={Film}>{anime.episodes ?? "?"} episódios</InfoItem>
            <InfoItem icon={Clock}>{anime.duration ?? "?"} min por episódio</InfoItem>
            <InfoItem icon={Star}>
              {anime.averageScore}/100
            </InfoItem>
            <InfoItem icon={Users}>
              {anime.studios.nodes.length > 0
                ? anime.studios.nodes.map((s) => s.name).join(", ")
                : "Estúdio desconhecido"}
            </InfoItem>
            <InfoItem>
              {formatSeason(anime.season)} {anime.startDate.year ?? ""}
            </InfoItem>
            <InfoItem>
              <span className="capitalize">{anime.status.toLowerCase()}</span>
            </InfoItem>
            <InfoItem>
              Fonte: {anime.source ?? "Desconhecida"}
            </InfoItem>
          </div>

          <Genres genres={anime.genres} />
          <Characters characters={anime.characters} />
          <Relations relations={anime.relations} />

          {/* Link oficial */}
          {anime.siteUrl && (
            <a
              href={anime.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-blue-400 hover:underline"
            >
              <ExternalLink size={16} />
              Site Oficial
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
