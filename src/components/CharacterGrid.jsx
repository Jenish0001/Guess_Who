import "./CharacterGrid.css";
import { useEffect, useState } from "react";
import useOnePieceCharacter from "../hooks/useOnePieceCharacter";
export default function CharacterGrid() {
  const characters = useOnePieceCharacter();

  return (
    <div className="character-list">
      {characters.map((char) => (
        <div key={char.id} className="character-card">
          <img src={char.avatarSrc} alt={char.englishName} width={150} />
        </div>
      ))}
    </div>
  );
}
