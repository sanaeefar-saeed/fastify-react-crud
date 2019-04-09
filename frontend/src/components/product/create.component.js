import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {
  changeProductName,
  changeProductId,
  createProductError,
} from "../../actions/productActions";

class CreateProduct extends Component {
  clearInputs = () => {
    this.props.dispatch(changeProductName(""));
    this.props.dispatch(changeProductId(""))
  };

  componentDidMount() {
    this.clearInputs();
  }

  onChangeProductName = e => this.props.dispatch(changeProductName(e.target.value));

  onChangeProductId = e => this.props.dispatch(changeProductId(e.target.value));

  onSubmit = e => {
    e.preventDefault();
    const newProduct = {
      productId: this.props.productId,
      productName: this.props.productName
    };
    axios
      .post("http://localhost:4000/api/products", newProduct)
      // todo remove this console log
      .then(res => console.log(res.data))
      .catch(err => this.props.dispatch(createProductError(err)));

    this.clearInputs();
  };

  submitValidation = () => {
    return Boolean(this.props.productId) && Boolean(this.props.productName);

  };

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Add New Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Product Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.props.productName}
              onChange={this.onChangeProductName}
            />
          </div>
          <div className="form-group">
            <label>Product ID: </label>
            <input
              type="text"
              className="form-control"
              value={this.props.productId}
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

const mapStateToProps = state => {
  const productName = state.productReducer.productName;
  const productId = state.productReducer.productId;

  return {productName, productId}
};

export default connect(mapStateToProps)(CreateProduct)