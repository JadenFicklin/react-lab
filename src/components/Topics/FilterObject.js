import React, { useState } from "react";

function FilterObject() {
  const [unfilteredArray, setUnfilteredArray] = useState([
    { name: "Jimmy Joe", title: "Hack0r", age: 12 },
    { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
    { name: "Carly Armstrong", title: "CEO" },
  ]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [objInput, setObjInput] = useState("");

  const filterFunction = (param) => {
    let filter = [];
    for (var i = 0; i < unfilteredArray.length; i++) {
      if (unfilteredArray[i].hasOwnProperty(param)) {
        filter.push(unfilteredArray[i]);
      }
    }
    setFilteredArray({ filter });
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4> Filter Object </h4>

      {/* display array */}
      <span className="puzzleText">
        Original:{JSON.stringify(unfilteredArray)}
      </span>

      {/* user input */}
      <input
        className="inputLine"
        onChange={(e) => setObjInput(e.target.value)}
      ></input>

      {/* submit button */}
      <button
        className="confirmationButton"
        onClick={() => filterFunction(objInput)}
      >
        Filter
      </button>

      {/* display field */}
      <span className="resultsBox filterObjectRB">
        Filtered:{JSON.stringify(filteredArray)}
      </span>
    </div>
  );
}

export default FilterObject;
