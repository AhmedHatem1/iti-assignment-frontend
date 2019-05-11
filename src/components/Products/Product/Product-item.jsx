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
      <td className="align-middle">
        <img
          src={ProductImage}
          alt={ProductName}
          title={ProductName}
          className="img-fluid img-thumbnail"
          style={{ height: "50px", cursor: "pointer" }}
          onClick={() => props.ViewImageClick(id)}
        />
      </td>
      <td className="align-middle">{ProductName}</td>
      <td className="align-middle">{Price}</td>
      <td className="align-middle">{ProducerCompanyName}</td>
      <td className="align-middle">
        <button className="btn btn-primary" onClick={() => props.EditClick(id)}>
          <i className="fa fa-pencil" /> Edit
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
