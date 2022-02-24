import React, { useState } from "react";

function Sum() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);

  const [display, setDisplay] = useState(0);

  const handleClick = () => {
    setDisplay(+firstNum + +secondNum);
  };

  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input
        className="inputLine"
        type="number"
        onChange={(e) => setFirstNum(e.target.value)}
      />
      <input
        className="inputLine"
        type="number"
        onChange={(e) => setSecondNum(e.target.value)}
      />
      <button className="confirmationButton" onClick={() => handleClick()}>
        Add
      </button>
      <span className="resultsBox"> Sum: {display}</span>
    </div>
  );
}

export default Sum;
