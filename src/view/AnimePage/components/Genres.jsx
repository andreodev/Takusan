export function Genres({ genres }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {genres.map((genre) => (
        <span
          key={genre}
          className="bg-zinc-800 border border-zinc-700 text-sm px-3 py-1 rounded-full text-zinc-300 hover:bg-zinc-700 transition cursor-default"
        >
          {genre}
        </span>
      ))}
    </div>
  );
}
