import "./CharacterGrid.css";
import { useEffect } from "react";

export default function CharacterGrid({
  characters,
  selected,
  chosenCharacters,
  setChosenCharacters,
  onSelect
}) {
  useEffect(() => {
    const filtered = characters.filter((c) => selected.includes(c.id));
    setChosenCharacters(filtered);
  }, [characters, selected, setChosenCharacters]);

  return (
    <div className="character-list">
      {chosenCharacters.map((char) => (
        <div
          key={char.id}
          className="character-card"
          onClick={() => onSelect(char)}
        >
          <img src={char.avatarSrc} alt={char.englishName} />
          <h3>{char.englishName}</h3>
        </div>
      ))}
    </div>
  );
}
