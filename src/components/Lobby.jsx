import "./Lobby.css";

export default function Lobby({
  characters,
  selected,
  setSelected,
  RoomCode,
  setPhase
}) {
  
  const handleClick = (character) => {
    setSelected((prev) => {
      if (prev.includes(character.id)) {
        return prev.filter((id) => id !== character.id);
      }
      if (prev.length >= 18) return prev;
      return [...prev, character.id];
    });
  };  

  return (
    <div className="lobby-container">
      <h2 className="lobby-title">Game Lobby</h2>
      <p id="code">Room Code: {RoomCode}</p>

      <button
        className="next-btn"
        onClick={() => {
          if (selected.length !== 18) {
            alert(`Pick ${18 - selected.length} more characters.`);
          } else {
            setPhase("play");
          }
        }}
      >
        Start Game
      </button>

      <div className="charactersList">
        <h2>Select 18 Characters</h2>
        <div className="charactersGrid">
          {characters.map((character) => (
            <div
              key={character.id}
              className={`characterCard ${
                selected.includes(character.id) ? "selected" : ""
              }`}
              onClick={() => handleClick(character)}
            >
              <img src={character.avatarSrc} alt={character.englishName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
