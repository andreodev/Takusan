export function Characters({ characters }) {
  if (!characters.edges.length) return null;
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4 text-white">Personagens Principais</h3>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
        {characters.edges.map(({ node, role }) => (
          <div key={node.id} className="flex-shrink-0 w-24">
            <img
              src={node.image.medium}
              alt={node.name.full}
              className="rounded-lg mb-1 w-24 h-32 object-cover"
            />
            <p
              className="text-zinc-300 text-sm text-center truncate"
              title={node.name.full}
            >
              {node.name.full}
            </p>
            <p className="text-xs text-zinc-500 text-center capitalize">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
