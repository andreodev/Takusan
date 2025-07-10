import { useState, useEffect } from "react";

export function useAnime(id) {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const query = `
        query ($id: Int) {
          Media(id: $id, type: ANIME) {
            title {
              romaji
              english
              native
            }
            description(asHtml: false)
            averageScore
            genres
            coverImage {
              large
            }
            startDate {
              year
              month
            }
            episodes
            duration
            status
            season
            studios {
              nodes {
                name
              }
            }
            source
            trailer {
              site
              id
              thumbnail
            }
            characters(sort: ROLE, perPage: 5) {
              edges {
                node {
                  id
                  name {
                    full
                  }
                  image {
                    medium
                  }
                }
                role
              }
            }
            relations {
              edges {
                relationType
                node {
                  id
                  title {
                    romaji
                    english
                  }
                  type
                }
              }
            }
            siteUrl
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
          body: JSON.stringify({ query, variables: { id: Number(id) } }),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const { data } = await response.json();
        setAnime(data.Media);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { anime, loading, error };
}
