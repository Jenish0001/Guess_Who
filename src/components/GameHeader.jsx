import { useState } from "react";
import "./GameHeader.css";
export default function GameHeader({ setRoomCode, setPhase }) {

  const CreateGame = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setRoomCode(code);
    setPhase("lobby");

  };

  const FindGame = () => {
  }

  return (
    <>
      <div className="whole">
        <div className="header">Guess Who?
        </div>
        <img src="/images/guess_who_pic.jpeg" alt="Image" srcset="" className="guessImg" />
        <div className="buttons">
          <button onClick={CreateGame}>Create Game</button>
          <button onClick={FindGame}>Find Game</button>
        </div>
      </div>

    </>
  )
}