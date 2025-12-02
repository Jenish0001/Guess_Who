import "./CharacterGrid.css";
import { useEffect, useState } from "react";
// import useOnePieceCharacter from "../hooks/useOnePieceCharacter";
export default function CharacterGrid({ selected, characters, chosenCharacters, setChosenCharacters}) {
  useEffect(() => {
    const filtered = characters.filter((character) => selected.includes(character.id));
    setChosenCharacters(filtered);
  }, [characters, selected, setChosenCharacters]);

  return (
    <div className="character-list">
      {chosenCharacters.map((char) => (
        <div key={char.id} className="character-card" >
          <img src={char.avatarSrc} alt={char.englishName} width={150} />
        </div>
      ))}
    </div>
  );
}
