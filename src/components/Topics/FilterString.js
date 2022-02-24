import React, { useState } from "react";

function FilterString() {
  const names = [
    "James",
    "Jessica",
    "Melody",
    "Tyler",
    "Blake",
    "Jennifer",
    "Mark",
    "Maddy",
  ];
  const [display, setDisplay] = useState(names);
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleClick = () => {
    let filteredName = [];
    for (let i = 0; i < display.length; i++) {
      if (display[i].includes(input)) {
        filteredName.push(display[i]);
      }
    }
    setFiltered(filteredName);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4> Filter String </h4>

      {/* display */}
      <span className="puzzleText"> Names: {JSON.stringify(display)}</span>

      {/* user input */}
      <input
        className="inputLine"
        onChange={(e) => setInput(e.target.value)}
      ></input>

      {/* button */}
      <button className="confirmationButton" onClick={() => handleClick()}>
        Filter
      </button>

      {/* display filtered names */}
      <span className="resultsBox filterStringRB">
        {" "}
        Filtered Names: {JSON.stringify(filtered)}
      </span>
    </div>
  );
}

export default FilterString;
