import "./App.css";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameOver from "./components/GameOver.jsx";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination.js";

const PLAYERS_SYMBOL = ["X", "O"];
const PLAYERS = {
	[PLAYERS_SYMBOL[0]]: "Player 1",
	[PLAYERS_SYMBOL[1]]: "Player 2",
};

function createNewGameBoard() {
	return new Array(3).fill(new Array(3).fill(null));
}

const GAME_BOARD = createNewGameBoard();

function App() {
	const [players, setPlayers] = useState(PLAYERS);
	const [gameBoard, setGameBoard] = useState(GAME_BOARD);
	const flatGameBoard = gameBoard.flat();
	const activePlayer =
		flatGameBoard.filter((gameBoardCell) => gameBoardCell === null).length % 2 > 0 ? PLAYERS_SYMBOL[0] : PLAYERS_SYMBOL[1];
	let winnerPlayer = "";

	WINNING_COMBINATIONS.forEach((winningCombination) => {
		const firstWinniningSymbol = flatGameBoard[winningCombination[0]];
		const secondWinniningSymbol = flatGameBoard[winningCombination[1]];
		const thirdWinniningSymbol = flatGameBoard[winningCombination[2]];

		if (
			firstWinniningSymbol &&
			secondWinniningSymbol &&
			thirdWinniningSymbol &&
			firstWinniningSymbol === secondWinniningSymbol &&
			secondWinniningSymbol === thirdWinniningSymbol
		) {
			winnerPlayer = players[firstWinniningSymbol];
		}
	});

	const isDraw = !winnerPlayer && flatGameBoard.filter((gameBoardCell) => gameBoardCell !== null).length === 9;

	function updatePlayers(playerSymbol, playerName) {
		setPlayers((prevPlayers) => ({ ...prevPlayers, [playerSymbol]: playerName }));
	}

	function handleButtonClick(rowIndex, colIndex) {
		setGameBoard((prevGameBoard) => {
			let newGameBoard = [...prevGameBoard.map((prevGameBoardRows) => [...prevGameBoardRows])];

			newGameBoard[rowIndex][colIndex] = activePlayer;

			return newGameBoard;
		});
	}

	function handleGameRematchClick() {
		setGameBoard(createNewGameBoard());
	}

	return (
		<article className="game-area">
			<h1 className="game-area__h1">Tic-Tac-Toe</h1>

			<div className="game-area__players">
				<Player
					playerInitialName={players[PLAYERS_SYMBOL[0]]}
					playerSymbol={PLAYERS_SYMBOL[0]}
					isActivePlayer={PLAYERS_SYMBOL[0] === activePlayer}
					onPlayerUpdate={updatePlayers}
				/>
				<Player
					playerInitialName={players[PLAYERS_SYMBOL[1]]}
					playerSymbol={PLAYERS_SYMBOL[1]}
					isActivePlayer={PLAYERS_SYMBOL[1] === activePlayer}
					onPlayerUpdate={updatePlayers}
				/>
			</div>

			<div className="game-area__gameboard">
				<GameBoard gameBoard={gameBoard} onButtonClick={handleButtonClick} />
			</div>

			{(winnerPlayer || isDraw) && <GameOver winnerPlayer={winnerPlayer} onGameRematchClick={handleGameRematchClick} />}
		</article>
	);
}

export default App;
