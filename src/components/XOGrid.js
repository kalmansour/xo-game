import XOSquare from "./XOSquare";
import { useState, useEffect } from "react";
import X from "../X.png";
import O from "../O.png";

//Styling
import "../styles/styles.css";

const XOGrid = () => {
  const [squares, setSquares] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [counter, setCounter] = useState(0);
  const setTitle = (index) => {
    if (squares[index] === null) {
      const squaresCopy = [...squares];
      squaresCopy[index] = counter % 2 === 0 ? X : O;
      setSquares(squaresCopy);

      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    checkWinner(O);
    checkWinner(X);
  });

  const checkWinner = (p) => {
    const r1 = [squares[0], squares[1], squares[2]].join("") === `${p}${p}${p}`;
    const r2 = [squares[3], squares[4], squares[5]].join("") === `${p}${p}${p}`;
    const r3 = [squares[6], squares[7], squares[8]].join("") === `${p}${p}${p}`;
    const c1 = [squares[0], squares[3], squares[6]].join("") === `${p}${p}${p}`;
    const c2 = [squares[1], squares[4], squares[7]].join("") === `${p}${p}${p}`;
    const c3 = [squares[2], squares[5], squares[8]].join("") === `${p}${p}${p}`;
    const d1 = [squares[0], squares[4], squares[8]].join("") === `${p}${p}${p}`;
    const d2 = [squares[2], squares[4], squares[6]].join("") === `${p}${p}${p}`;
    if (r1 || r2 || r3 || c1 || c2 || c3 || d1 || d2) {
      alert(`We have a Winner!`);
    }
  };

  const squaresTitle = squares.map((squareTitle, index) => (
    <XOSquare index={index} title={squareTitle} setTitle={setTitle} />
  ));
  return (
    <div>
      <h1>{`${counter % 2 === 0 ? "X" : "0"} Turn`}</h1>
      <div className="xogrid">{squaresTitle}</div>
    </div>
  );
};
export default XOGrid;
