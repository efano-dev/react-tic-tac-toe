function GameBoard({ gameBoard, onButtonClick }) {
    return (
        <>
            {gameBoard.map((gameBoardRow, rowIndex) => {
                return gameBoardRow.map((gameBoardCol, colIndex) => {
                    return (
                        <button
                            type="button"
                            className="game-area__gameboard__button"
                            onClick={() => onButtonClick(rowIndex, colIndex)}
                            key={`${rowIndex}-${colIndex}`}
                            disabled={gameBoardCol}
                        >
                            {gameBoardCol}
                        </button>
                    );
                });
            })}
        </>
    );
}

export default GameBoard;
