import "./App.css";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
    <article className="game-area">
        <h1 className="game-area__h1">Tic-Tac-Toe</h1>

        <div className="game-area__players">
            <Player />
            <Player />
        </div>

        <div className="game-area__gameboard">
            <GameBoard />
        </div>
    </article>
  );
}

export default App;
