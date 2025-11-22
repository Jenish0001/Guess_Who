import "./Lobby.css";
// import CharactersList from "./CharactersList";
import { useState } from "react";
import useOnePieceCharacter from "../hooks/useOnePieceCharacter";
// import "./CharacterGrid.css"

export default function Lobby({ setPhase, RoomCode, selected, setSelected, characters }) {
  const host = { name: "Jenish", wins: 5, games: 10 };
  const member = { name: "Dai", wins: 3, games: 8 };


  const handleClick = (character) => {

    setSelected(prev => {
      let updated;

      if (prev.includes(character.id)) {
        updated = prev.filter(id => id !== character.id);
      } else {
        updated = [...prev, character.id];
      }
      return updated;
    });
  };



  return (
    <>
      <div className="lobby-container">
        <h2 className="lobby-title">Game Lobby</h2>
        <p id="code">Room Code: {RoomCode}</p>
        <table className="lobby-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Name</th>
              <th>Wins</th>
              <th>Games</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Host</td>
              <td>{host.name}</td>
              <td>{host.wins}</td>
              <td>{host.games}</td>
            </tr>
            <tr>
              <td>Member</td>
              <td>{member.name}</td>
              <td>{member.wins}</td>
              <td>{member.games}</td>
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button className="back-btn" onClick={() => setPhase("initial")}>
            ← Back
          </button>
          <button className="next-btn" onClick={() => setPhase("play")}>Start Game</button>
        </div>
        <div className="charactersList">
          <h2>Choose Characters for the Game</h2>
          <div className="charactersGrid">
            {characters.map((character) => (
              <div
                key={character.id}
                className={`characterCard ${selected.includes(character.id) ? "selected" : ""
                  }`}
                onClick={() => handleClick(character)}
              >
                <img src={character.avatarSrc} alt={character.englishName} />
                <p>{character.englishName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
