import React from "react";

import ProductItem from "./Product/Product-item";
const ProductList = props => {
  const tableHeadlines = [
    "Image",
    "Product Name",
    "Price",
    "Producer Company"
  ].map(headline => {
    return <th>{headline}</th>;
  });

  const tableData = props.products.map(product => (
    <ProductItem product={product} />
  ));

  return (
    <table className="table table-responsive table-striped table-hover w-100">
      <thead className="thead-dark text-center">
        <tr>{tableHeadlines}</tr>
      </thead>

      <tbody className="text-center">{tableData}</tbody>
    </table>
  );
};

export default ProductList;
