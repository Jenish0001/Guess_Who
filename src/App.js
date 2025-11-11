// src/App.jsx
import { useState } from "react";

// import your screens
import Lobby from "./components/Lobby";
import LockInModal from "./components/LockInModal";
import CharacterGrid from "./components/CharacterGrid";
import ResultScreen from "./components/ResultScreen";
import GameHeader from "./components/GameHeader";

export default function App() {
  // global game state
  const [phase, setPhase] = useState("initial");
  const [RoomCode, setRoomCode] = useState(null);
  const [playerInfo, setPlayerInfo] = useState({ name: "", roomCode: "", isHost: false });
  const [lockedCharacter, setLockedCharacter] = useState(null);
  const [opponentLocked, setOpponentLocked] = useState(null);
  const [gameResult, setGameResult] = useState(null);

  // navigation helpers
  const goToLobby = () => setPhase("lobby");
  const goToLockIn = () => setPhase("lockin");
  const goToPlay = () => setPhase("play");
  const goToResult = () => setPhase("result");

  return (
    <div className="app-container">
      {phase === "initial" && (
        <GameHeader setRoomCode = {setRoomCode} setPhase={setPhase}
        />
      )}

      {phase === "lobby" && (
        <Lobby
          setPhase={setPhase}
          RoomCode={RoomCode}
          onJoin={(info) => {
            setPlayerInfo(info);
            goToLockIn();
          }}
        />
      )}

      {phase === "lockin" && (
        <LockInModal
          onLock={(character) => {
            setLockedCharacter(character);
            goToPlay();
          }}
          onBack={goToLobby}
        />
      )}

      {phase === "play" && (
        <CharacterGrid
          lockedCharacter={lockedCharacter}
          onFinish={(result) => {
            setGameResult(result);
            goToResult();
          }}
        />
      )}

      {phase === "result" && (
        <ResultScreen
          result={gameResult}
          onRestart={goToLobby}
        />
      )}
    </div>
  );
}
