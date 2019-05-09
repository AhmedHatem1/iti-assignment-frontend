import React from "react";

const ProductItem = props => {
  const {
    id,
    ProductImage,
    ProductName,
    Price,
    ProducerCompanyName
  } = props.product;
  return (
    <tr>
      <td>
        <img
          src={ProductImage}
          alt={ProductName}
          title={ProductName}
          className="img-fluid"
          style={{ height: "100px" }}
        />
      </td>
      <td>{ProductName}</td>
      <td>{Price}</td>
      <td>{ProducerCompanyName}</td>
    </tr>
  );
};

export default ProductItem;
