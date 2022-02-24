import React, { useState } from "react";

function Palindrome() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState();

  const handleClick = (param) => {
    let splitParam = param.split("");
    let arr1 = [];
    for (let i = 0; i < splitParam.length; i++) {
      arr1.unshift(splitParam[i]);
    }
    let joinedParam = splitParam.join("");
    let joinedArr1 = arr1.join("");

    if (joinedParam === joinedArr1) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  return (
    <div className="puzzleBox palindromePB">
      <h4> Palindrome </h4>
      <input
        className="inputLine"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => handleClick(input)}>
        Check
      </button>
      <span className="resultsBox"> Palindrome: {JSON.stringify(display)}</span>
    </div>
  );
}

export default Palindrome;

// make a palindrome

// const palindrome = (param) => {
// let splitParam = param.split("");
// let arr1 = [];
// for (let i = 0; i < splitParam.length; i++) {
//   arr1.unshift(splitParam[i]);
// }
// let joinedParam = splitParam.join("");
// let joinedArr1 = arr1.join("");

// if (joinedParam === joinedArr1) {
//   return true;
// } else {
//   return false;
// }
// };

// console.log(palindrome("madam"));
