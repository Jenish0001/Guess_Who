export default function ResultScreen({ lockedCharacter }) {
  return (
    <div className="result-screen">
      <h2>Your Final Locked Character</h2>

      <img
        src={lockedCharacter.avatarSrc}
        alt={lockedCharacter.englishName}
        width={200}
      />

      <h3>{lockedCharacter.englishName}</h3>
    </div>
  );
}
