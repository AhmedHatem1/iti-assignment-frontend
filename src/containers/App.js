import React, { Component } from "react";

import "./App.css";
import ProductList from "../components/Products/product-list";
import { products } from "../data";
class App extends Component {
  constructor() {
    super();
    this.state = {
      products
    };
  }
  render() {
    return <ProductList products={this.state.products} />;
  }
}

export default App;
