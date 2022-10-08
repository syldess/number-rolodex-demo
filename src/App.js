import React from "react";
import NumberRolodex from "./NumberRolodex";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "0",
      numDigits: 1,
    };
  }

  addDigit = () => {
    if (this.state.numDigits < 10) {
      this.setState({
        number: this.state.number + "0",
        numDigits: this.state.numDigits + 1,
      });
    }
  };

  removeDigit = () => {
    if (this.state.numDigits > 1) {
      this.setState({
        number: this.state.number.slice(0, this.state.number.length - 1),
        numDigits: this.state.numDigits - 1,
      });
    }
  };

  render() {
    const { number } = this.state;
    return (
      <>
        <div className="container">
          <div className="title">
            <h1>Number Rolodex Demo</h1>
          </div>
          <div className="rolodex">
            <NumberRolodex
              number={number}
              numberOfDigits={this.state.numDigits}
              changeNumber={(num) =>
                this.setState({ ...this.state, number: num })
              }
            />
          </div>
          <div id="demoSection">
            <button className="btn" onClick={this.addDigit}>
              {" "}
              <i className="las la-plus-circle"></i> add digit
            </button>
            <button className="btn" onClick={this.removeDigit}>
              {" "}
              <i className="las la-minus-circle"></i> remove digit
            </button>
          </div>
          <div className="title">
            <h2>
              Stored In State:{" "}
              <span className="darkLabel">{this.state.number}</span>
            </h2>
          </div>
          <div id="footer"></div>
        </div>
      </>
    );
  }
}

export default App;
