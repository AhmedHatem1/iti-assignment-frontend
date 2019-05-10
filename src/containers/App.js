import React, { Component } from "react";

import "./App.css";
import ProductList from "../components/Products/product-list";
import Popup from "../components/popup/Popup";
import EditForm from "../components/EditForm/EditForm";
import { products } from "../data";
class App extends Component {
  constructor() {
    super();
    this.state = {
      products,
      selectedProduct: 0,
      isOpen: false,
      viewImage: false
    };
  }
  onEditClickHandler = id => {
    const products = [...this.state.products];
    const productIndex = products.findIndex(product => product.id === id);
    this.setState({ isOpen: true, selectedProduct: productIndex });
  };

  onViewImageClickHandler = id => {
    const products = [...this.state.products];
    const productIndex = products.findIndex(product => product.id === id);
    this.setState({
      isOpen: true,
      viewImage: true,
      selectedProduct: productIndex
    });
  };

  onCloseClickHandler = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const SelectedProduct = this.state.products[this.state.selectedProduct];
    return (
      <div className="container">
        <ProductList
          products={this.state.products}
          EditClick={this.onEditClickHandler}
          ViewImageClick={this.onViewImageClickHandler}
        />

        {this.state.isOpen && (
          <Popup CloseClick={this.onCloseClickHandler}>
            {this.state.viewImage ? (
              <img
                src={SelectedProduct.ProductImage}
                alt={SelectedProduct.ProductName}
                title={SelectedProduct.ProductName}
                className="img-fluid"
              />
            ) : (
              <EditForm product={SelectedProduct} />
            )}
          </Popup>
        )}
      </div>
    );
  }
}

export default App;
