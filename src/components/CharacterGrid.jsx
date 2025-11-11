import { useEffect, useState } from "react";

export default function OnePieceCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const query = `
        query {
          characters(page: 1) {
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
      setCharacters(data.characters.results);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map((char) => (
        <div key={char.id} className="character-card">
          <img src={char.avatarSrc} alt={char.englishName} width={150} />
          <h3>{char.englishName}</h3>
        </div>
      ))}
    </div>
  );
}
