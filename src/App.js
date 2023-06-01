import React, { useState }from "react";
import NumberRolodex from "./components/number-rolodex/NumberRolodex";

import "./App.css";

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [numDigits, setNumDigits] = useState(1);

  const addDigit = () => {
    if (numDigits < 10) {
      setCurrentNumber(currentNumber + "0");
      setNumDigits(numDigits + 1);
    }
  }

  const removeDigit = () => {
    if (numDigits > 1) {
      setCurrentNumber(currentNumber.slice(0, currentNumber.length - 1));
      setNumDigits(numDigits - 1);
    }
  }

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Number Rolodex Demo</h1>
        </div>
        <div className="rolodex">
          <NumberRolodex
            currentNumber={currentNumber}
            numberOfDigits={numDigits}
            changeNumber={(num) => setCurrentNumber(num)}
          />
        </div>
        <div id="demoSection">
          <button className="btn" onClick={addDigit}>
            {" "}
            <i className="las la-plus-circle"></i> add digit
          </button>
          <button className="btn" onClick={removeDigit}>
            {" "}
            <i className="las la-minus-circle"></i> remove digit
          </button>
        </div>
        <div className="title">
          <h2>
            Stored In State:{" "}
            <span className="darkLabel">{currentNumber}</span>
          </h2>
        </div>
        <div id="footer"></div>
      </div>
    </>
  );
}

export default App;
