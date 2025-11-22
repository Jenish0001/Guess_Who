import "./CharacterGrid.css";
import { useEffect, useState } from "react";
// import useOnePieceCharacter from "../hooks/useOnePieceCharacter";
export default function CharacterGrid({ selected, characters }) {

  const chosenCharacters = characters.filter(c =>
    selected.includes(c.id)
  );

  const LockInClick = (e) => {
    console.log("Character clicked:", e.currentTarget);
  }

  return (
    <div className="character-list">
      {chosenCharacters.map((char) => (
        <div key={char.id} className="character-card" onClick={LockInClick}>
          <img src={char.avatarSrc} alt={char.englishName} width={150} />
        </div>
      ))}
    </div>
  );
}
