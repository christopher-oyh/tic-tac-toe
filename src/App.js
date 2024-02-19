import React, { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squareStates, onPlay, currentMove }) {
  const winner = calculateWinner(squareStates);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Current player: ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i) {
    // if the square is already filled return
    if (squareStates[i] || calculateWinner(squareStates)) {
      return;
    }

    const nextSquareStates = squareStates.slice();
    if (xIsNext) {
      nextSquareStates[i] = "X";
    } else {
      nextSquareStates[i] = "O";
    }
    onPlay(nextSquareStates);
  }

  function calculateWinner(squareStates) {
    /**
     * Calculates the winner of a tic-tac-toe game based on the current state of the squares.
     * @param {Array} squareStates - The current state of the squares in the tic-tac-toe game.
     * @returns {string|null} - The symbol of the winner ('X' or 'O') or null if there is no winner yet.
     */
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        squareStates[a] &&
        squareStates[a] === squareStates[b] &&
        squareStates[a] === squareStates[c]
      ) {
        return squareStates[a];
      }
    }
    return null;
  }
  return (
    <>
      <div className="status">
        {status}
        <br />
        Current Move: {currentMove}
      </div>
      <div className="board-row">
        <Square value={squareStates[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squareStates[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squareStates[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squareStates[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squareStates[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squareStates[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squareStates[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squareStates[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squareStates[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  // State of the current player
  const [xIsNext, setXIsNext] = useState(true);

  // History of the squares
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [currentMove, setCurrentMove] = useState(0);

  const currentSquareStates = history[currentMove];

  const moves = history.map((squareStates, move) => {
    let description;
    if (move) {
      description = `Go to move #${move} [${squareStates}]`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function jumpTo(nextMove) {
    /**
     * Jumps to a specific move in the history of the game.
     * @param {number} nextMove - The move to jump to.
     */
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  function handlePlay(nextSquareStates) {
    /**
     * Handles the play of the current player.
     * @param {Array} nextSquareStates - The next state of the squares in the tic-tac-toe game.
     */
    // if the move is not the last move in the history, discard all the moves after the current move
    let newHistory = [...history.slice(0, currentMove + 1), nextSquareStates];
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squareStates={currentSquareStates}
          onPlay={handlePlay}
          currentMove={currentMove}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
