import React, { Component } from "react";
import axios from "axios";

export default class CreateProduct extends Component {
  state = {
    productName: "",
    productId: "",
    createProductError: false
  };

  onChangeProductName = e => this.setState({ productName: e.target.value });

  onChangeProductId = e => this.setState({ productId: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const newProduct = {
      productId: this.state.productId,
      productName: this.state.productName
    };
    axios
      .post("http://localhost:4000/api/products", newProduct)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ createProductError: err }));

    this.setState({
      productName: "",
      productId: ""
    });
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Product Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.productName}
              onChange={this.onChangeProductName}
            />
          </div>
          <div className="form-group">
            <label>Product ID: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.productId}
              onChange={this.onChangeProductId}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Save Product"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
