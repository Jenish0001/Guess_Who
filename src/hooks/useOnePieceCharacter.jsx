import { useEffect, useState } from "react";

export default function useOnePieceCharacter() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const totalPages = 34;

        // Create an array of promises for all pages
        const queries = Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const query = `
            query {
              characters(page: ${page}) {
                results {
                  id
                  englishName
                  avatarSrc
                }
              }
            }
          `;
          return fetch("/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ query }),
          }).then((res) => res.json());
        });

        // Wait for ALL requests at once
        const results = await Promise.all(queries);

        const allCharacters = results.flatMap(
          (r) => r.data?.characters?.results ?? []
        );

        setCharacters(allCharacters);
      } catch (err) {
        console.error("Error loading characters:", err);
      }
    };

    fetchCharacters();
  }, []);

  return characters;
}
