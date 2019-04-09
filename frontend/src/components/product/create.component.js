import React, {Component} from "react";
import axios from "axios";

export default class CreateProduct extends Component {
  state = {
    productName: "",
    productId: "",
    createProductError: false
  };

  onChangeProductName = e => this.setState({productName: e.target.value});

  onChangeProductId = e => this.setState({productId: e.target.value});

  onSubmit = e => {
    e.preventDefault();
    const newProduct = {
      productId: this.state.productId,
      productName: this.state.productName
    };
    axios
      .post("http://localhost:4000/api/products", newProduct)
      // todo remove this console log
      .then(res => console.log(res.data))
      .catch(err => this.setState({createProductError: err}));

    this.setState({
      productName: "",
      productId: ""
    });
  };

  submitValidation = ()=> {
    return Boolean(this.state.productId) && Boolean(this.state.productName);

  };

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Add New Product</h3>
        <form onSubmit={this.onSubmit} >
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
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.submitValidation()}
              onClick={this.onSubmit}
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    );
  }
}
