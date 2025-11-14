import "./Lobby.css";
// import CharactersList from "./CharactersList";
import { useState } from "react";
import useOnePieceCharacter from "../hooks/useOnePieceCharacter";
// import "./CharacterGrid.css"

export default function Lobby({ setPhase, RoomCode }) {
  const host = { name: "Jenish", wins: 5, games: 10 };
  const member = { name: "Dai", wins: 3, games: 8 };

  const characters = useOnePieceCharacter();
  const [selected, setSelected] = useState([]);

  const handleClick = (character) => {
    if (selected.includes(character.id)) {
      setSelected(selected.filter((id) => id !== character.id))
    }
    else {
      setSelected([...selected, character.id]);
    }
  }


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
