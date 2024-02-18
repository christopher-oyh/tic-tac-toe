import React, { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // State of the current player
  const [xIsNext, setXIsNext] = useState(true);

  // States of the squares
  const [squareStates, setSquareStates] = useState(Array(9).fill(null));

  const winner = calculateWinner(squareStates);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
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
    setXIsNext(!xIsNext);
    setSquareStates(nextSquareStates);
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
      <div className="status">{status}</div>
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
