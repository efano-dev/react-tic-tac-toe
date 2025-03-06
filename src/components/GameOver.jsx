function GameOver({ winnerPlayer, onGameRematchClick }) {
    return (
        <div className="game-area__gameover">
            <h2 className="game-area__gameover__h2">Game Over!</h2>
            <p className="game-area__gameover__p">
                {winnerPlayer ? `${winnerPlayer} Won!` : "It's a Draw!"}
            </p>
            <button type="button" className="game-area__gameover__button" onClick={onGameRematchClick}>Rematch</button>
        </div>
    );
}

export default GameOver;
