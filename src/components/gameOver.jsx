export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over man</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>Its a draw</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
