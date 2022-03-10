import React, { useEffect, useState } from "react";
import { checkForWinner } from "./CheckForWinner";
const Game = () => {
  const [player, setPlayer] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const [countHistory,setCountHistory] = useState(0);

  

  
  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }

    let squares = [...cells];

    if (player === "x") {
      squares[num] = "x";
      setPlayer("o");
    } else {
      squares[num] = "o";
      setPlayer("x");
    }

    checkForWinner(squares,setWinner);
    setCells(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}><center>{cells[num]}</center></td>;
  };

  return (
    <div className="container">
        <h1>Player: {player}</h1>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <div>
          <h3>{winner} is the winner!</h3>
          <button className="button" onClick={() => handleRestart()}>Play Again</button>
        </div>
      )}
      {!winner && !cells.includes("") &&(<div><h3>voch voqi</h3> <button onClick={() => handleRestart()}>Play Again</button></div>)
      }
    </div>
  );
};

export default Game;
