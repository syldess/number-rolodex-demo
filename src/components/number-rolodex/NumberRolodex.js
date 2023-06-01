import React from "react";
import DigitFlipper from "./DigitFlipper";

const NumberRolodex = (props) => {
  const { currentNumber, changeNumber, numberOfDigits } = props;

  const increase = (pos, number) => {
    const increasedDigit = Number(number[pos]) + 1;
    const increasedNumber = number
      .slice(0, pos)
      .concat(increasedDigit < 10 ? increasedDigit : "0")
      .concat(number.slice(pos + 1));
    return increasedNumber;
  };

  const decrease = (pos, number) => {
    const decreasedDigit = Number(number[pos]) - 1;
    const decreasedNumber = number
      .slice(0, pos)
      .concat(decreasedDigit >= 0 ? decreasedDigit : "9")
      .concat(number.slice(pos + 1));
    return decreasedNumber;
  };

  const populateRolodex = () => {
    let allDigits = [];
    for (let i = 0; i < numberOfDigits; i++) {
      allDigits.push(
        <DigitFlipper
          digit={currentNumber[i]}
          increase={() => changeNumber(increase(i, currentNumber))}
          decrease={() => changeNumber(decrease(i, currentNumber))}
          key={i}
        />
      );
    }
    return allDigits.map((digit) => digit);
  };

  return <>{populateRolodex()}</>;
};

export default NumberRolodex;
