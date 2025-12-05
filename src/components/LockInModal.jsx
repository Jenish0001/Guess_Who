export default function LockInModal({ selectedCharacter, onLock, onBack }) {
  if (!selectedCharacter) return null;

  return (
    <div className="modal">
      <h2>Lock in {selectedCharacter.englishName}?</h2>

      <img
        src={selectedCharacter.avatarSrc}
        alt={selectedCharacter.englishName}
        width={180}
      />

      <div className="modal-buttons">
        <button onClick={() => onLock(selectedCharacter)}>Lock In</button>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
}
