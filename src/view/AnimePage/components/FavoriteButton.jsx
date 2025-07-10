import { useState } from "react";
import { Heart } from "lucide-react";

export function FavoriteButton() {
  const [fav, setFav] = useState(false);
  return (
    <button
      aria-label="Favoritar"
      onClick={() => setFav(!fav)}
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition ${
        fav
          ? "bg-red-600 text-white hover:bg-red-700"
          : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
      }`}
      title={fav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <Heart size={16} className={fav ? "fill-red-600" : ""} />
      {fav ? "Favorito" : "Favoritar"}
    </button>
  );
}
