import React, { useState } from "react";

function Square({ value }) {
  const [status, setStatus] = useState(null);
  const handleClick = () => {
    console.log("click");
    setStatus("X");
    // alert("click");
  };
  return (
    <button className="square" onClick={handleClick}>
      {status}
    </button>
  );
}

export default function Board() {
  const [squareStates, setSquareStates] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squareStates[0]} />
        <Square value={squareStates[1]} />
        <Square value={squareStates[2]} />
      </div>
      <div className="board-row">
        <Square value={squareStates[3]} />
        <Square value={squareStates[4]} />
        <Square value={squareStates[5]} />
      </div>
      <div className="board-row">
        <Square value={squareStates[6]} />
        <Square value={squareStates[7]} />
        <Square value={squareStates[8]} />
      </div>
    </>
  );
}
