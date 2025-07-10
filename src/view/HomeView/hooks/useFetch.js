import { useState, useEffect } from "react";

export function useTrendingAnimes() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);

      const query = `
        query {
          Page(perPage: 24) {
            media(type: ANIME, sort: TRENDING_DESC) {
              id
              title {
                romaji
                english
              }
              coverImage {
                large
              }
              genres
              status
            }
          }
        }
      `;

      try {
        const response = await fetch("https://graphql.anilist.co", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const { data } = await response.json();
        setAnimes(data.Page.media);
      } catch (err) {
        console.error("Failed to fetch trending animes:", err);
        setAnimes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return { animes, loading };
}
