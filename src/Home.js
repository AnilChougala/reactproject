import React, { Component } from "react";
import FunctionComp from "./FunctionComp";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>home 3</p>
          <FunctionComp />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
