import React, { Component } from "react";
import "./App.css";
import { products } from "../data";
class App extends Component {
  constructor() {
    super();
    this.state = {
      products
    };
  }
  render() {
    return (
      <div>
        <h1 className="btn btn-primary">
          {this.state.products[0].ProductName}
        </h1>
      </div>
    );
  }
}

export default App;
