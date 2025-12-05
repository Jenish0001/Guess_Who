import { useState } from "react";

import Lobby from "./components/Lobby";
import LockInModal from "./components/LockInModal";
import CharacterGrid from "./components/CharacterGrid";
import ResultScreen from "./components/ResultScreen";
import GameHeader from "./components/GameHeader";
import useOnePieceCharacter from "./hooks/useOnePieceCharacter";

export default function App() {
  const characters = useOnePieceCharacter();

  const [phase, setPhase] = useState("initial");
  const [RoomCode, setRoomCode] = useState(null);

  const [selected, setSelected] = useState([]);            // 18 chosen by host
  const [chosenCharacters, setChosenCharacters] = useState([]); // filtered 18
  const [lockedCharacter, setLockedCharacter] = useState(null); // final pick

  // navigation
  const goToLobby = () => setPhase("lobby");
  const goToPlay = () => setPhase("play");
  const goToLockIn = () => setPhase("lockin");
  const goToResult = () => setPhase("result");

  return (
    <div className="app-container">
      {phase === "initial" && (
        <GameHeader
          setRoomCode={setRoomCode}
          setPhase={setPhase}
        />
      )}

      {phase === "lobby" && (
        <Lobby
          characters={characters}
          selected={selected}
          setSelected={setSelected}
          RoomCode={RoomCode}
          setPhase={() => setPhase("play")}
        />
      )}

      {phase === "play" && (
        <CharacterGrid
          characters={characters}
          selected={selected}
          chosenCharacters={chosenCharacters}
          setChosenCharacters={setChosenCharacters}
          onSelect={(char) => {
            setLockedCharacter(char);
            goToLockIn();
          }}
        />
      )}

      {phase === "lockin" && (
        <LockInModal
          selectedCharacter={lockedCharacter}
          onBack={goToPlay}
          onLock={(char) => {
            setLockedCharacter(char);
            goToResult();
          }}
        />
      )}

      {phase === "result" && (
        <ResultScreen lockedCharacter={lockedCharacter} />
      )}
    </div>
  );
}
