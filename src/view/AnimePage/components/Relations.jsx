import { Link } from "react-router-dom";

export function Relations({ relations }) {
  if (!relations.edges.length) return null;
  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-white">Animes Relacionados</h3>
      <ul className="list-disc list-inside text-zinc-400 space-y-1">
        {relations.edges.map(({ relationType, node }) => (
          <li key={node.id}>
            <Link
              to={`/anime/${node.id}`}
              className="hover:underline text-blue-400"
            >
              {node.title.english || node.title.romaji}{" "}
              <span className="text-xs text-zinc-500">({relationType.toLowerCase()})</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
