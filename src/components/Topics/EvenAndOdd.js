import React, { useState } from "react";

function EvenAndOdd() {
  const [userInput, setUserInput] = useState("");
  const [evens, setEvens] = useState([]);
  const [odds, setOdds] = useState([]);

  const handleChange = (e) => {
    setUserInput(e);
  };

  function evensAndOdds(param) {
    let arr = param.split(",").map(function (item) {
      return parseInt(item, 10);
    });
    let evensArr = [];
    let oddsArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evensArr.push(arr[i]);
      } else {
        oddsArr.push(arr[i]);
      }
    }
    setEvens(evensArr);
    setOdds(oddsArr);
    return evensArr;
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4> Evens and Odds </h4>
      <input
        className="inputLine"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        className="confirmationButton"
        onClick={() => console.log(evensAndOdds(userInput))}
      >
        button
      </button>
      <span className="resultsBox"> Evens: {JSON.stringify(evens)}</span>
      <span className="resultsBox"> Odds: {JSON.stringify(odds)}</span>
    </div>
  );
}

export default EvenAndOdd;
