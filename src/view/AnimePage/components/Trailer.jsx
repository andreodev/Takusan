export function Trailer({ trailer }) {
  if (!trailer || trailer.site !== "youtube") return null;
  return (
    <div className="w-full aspect-video rounded overflow-hidden shadow-lg mb-6">
      <iframe
        src={`https://www.youtube.com/embed/${trailer.id}`}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
