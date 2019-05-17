import React, { Component } from "react";
import "./EditForm.css";
import { domainName } from "../../API";
import { editProduct } from "../../API/product";
class EditForm extends Component {
  state = {
    id: "",
    name: "",
    price: "",
    companyName: "",
    oldphotopath: "",
    photo: ""
  };

  onSubmitHandler = async e => {
    e.preventDefault();
    e.persist();
    const product = {
      name: e.target.elements[3].value,
      price: e.target.elements[4].value,
      companyName: e.target.elements[5].value,
      id: e.target.elements[1].value,
      oldphotopath: e.target.elements[0].value,
      photo: e.target.elements[2].value
    };
    console.log(product);
    var bodyFormData = new FormData();
    bodyFormData.set("name", product.name);
    bodyFormData.set("price", product.price);
    bodyFormData.set("companyName", product.companyName);
    bodyFormData.set("id", product.id);
    bodyFormData.set("oldphotopath", product.oldphotopath);
    bodyFormData.set("photo", product.photo);

    await editProduct(product.id, bodyFormData);
  };

  render() {
    const { id, name, price, imageUrl } = this.props.product;

    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="hidden"
          name="oldphotopath"
          id="image"
          className="form-control"
          value={imageUrl}
        />
        <input type="hidden" name="id" className="form-control" value={id} />
        <div className="form-group text-center">
          <div
            className="product-image mx-auto"
            style={{
              backgroundImage: `url(${domainName}images/${imageUrl})`
            }}
            onClick={this.imageClickHandler}
          />
          <input type="file" name="photo" id="image" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="productname">Product Name :</label>
          <input
            type="text"
            name="name"
            id="productname"
            className="form-control"
            placeholder="Type The Product Name"
            defaultValue={name}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="productprice">Product Price :</label>
          <input
            type="text"
            name="price"
            id="productprice"
            className="form-control"
            placeholder="Type The Product Price (EGP)"
            defaultValue={price}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Select Company Producer :</label>
          <select name="companyName" id="company" className="form-control">
            {this.props.companies.map((company, index) => (
              <option value={company.name} key={index}>
                {company.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group d-flex justify-content-end">
          <div className="">
            <input type="reset" className="btn btn-outline-danger mx-1" />
            <input type="submit" className="btn btn-info mx-1" value="Save" />
          </div>
        </div>
      </form>
    );
  }
}
export default EditForm;
