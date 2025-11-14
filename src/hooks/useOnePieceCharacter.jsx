import { useEffect, useState } from "react";

export default function useOnePieceCharacter() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const allResults = [];
            const totalPages = 34;

            for (let page = 1; page <= totalPages; page++) {
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

                const response = await fetch("/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify({ query }),

                });

                const { data } = await response.json();
                allResults.push(...data.characters.results);
            }

            setCharacters(allResults);
        };

        fetchCharacters();
    }, [])
    return characters;
};