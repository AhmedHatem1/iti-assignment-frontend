import React from "react";
const EditForm = props => {
  const {
    id,
    ProductImage,
    ProductName,
    Price,
    ProducerCompanyName
  } = props.product;
  return (
    <form>
      <div className="form-group">
        <label htmlFor="productname">Product Name :</label>
        <input
          type="text"
          name="productname"
          id="productname"
          className="form-control"
          placeholder="Type The Product Name"
          defaultValue={ProductName}
        />
      </div>

      <div className="form-group">
        <label htmlFor="productprice">Product Price :</label>
        <input
          type="text"
          name="productprice"
          id="productprice"
          className="form-control"
          placeholder="Type The Product Price (EGP)"
          defaultValue={Price}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country">Select Company Producer :</label>
        <select name="country" id="country" className="form-control">
          {["test1", "test2", "test3"].map((country, index) => (
            <option value={index} key={index}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group d-flex justify-content-end">
        <div className="">
          <input type="reset" className="btn btn-danger" />
          <input type="submit" className="btn btn-primary" value="Save" />
        </div>
      </div>
    </form>
  );
};

export default EditForm;
