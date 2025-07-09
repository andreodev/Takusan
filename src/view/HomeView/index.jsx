import { useEffect, useState } from "react";

export function HomeView() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const query = `
        query {
          Page(perPage: 8) {
            media(type: ANIME, sort: TRENDING_DESC) {
              id
              title {
                romaji
                english
              }
              coverImage {
                large
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

    fetchTrending();
  }, []);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-white">🔥 Em alta agora</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {animes.map((anime) => (
          <div key={anime.id} className="bg-[#76ABAE] rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={anime.coverImage.large}
              alt={anime.title.romaji}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-[140px]">
              <h2 className="text-lg font-semibold mb-2 text-black">
                {anime.title.english || anime.title.romaji}
              </h2>
              <a
                href={`https://anilist.co/anime/${anime.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 text-center"
              >
                Ver mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
