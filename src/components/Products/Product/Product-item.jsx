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
          style={{ height: "50px" }}
          onClick={() => props.ViewImageClick(id)}
        />
      </td>
      <td>{ProductName}</td>
      <td>{Price}</td>
      <td>{ProducerCompanyName}</td>
      <td>
        <button className="btn btn-primary" onClick={() => props.EditClick(id)}>
          <i className="fa fa-pencil" /> Edit
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
