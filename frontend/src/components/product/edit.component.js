import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {
  changeProductName,
  changeProductId,
  editProductError,
} from "../../actions/productActions";


class EditProduct extends Component {

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/products/" + this.props.match.params.id)
      .then(response => {
        this.props.dispatch(changeProductName(response.data.productName));
        this.props.dispatch(changeProductId(response.data.productId))
      })
      .catch(err => console.log(err));
  }

  onChangeProductName = e => this.props.dispatch(changeProductName(e.target.value));

  onChangeProductId = e => this.props.dispatch(changeProductId(e.target.value));

  onSubmit = e => {
    e.preventDefault();
    const editedProduct = {
      productName: this.props.productName,
      productId: this.props.productId
    };
    axios
      .put(
        "http://localhost:4000/api/products/" + this.props.match.params.id,
        editedProduct
      )
      // todo: remove console log for promise object !
      .then(res => console.log(res.data))
      .catch(err => this.props.dispatch(editProductError(err)));

    this.props.history.push("/product/index");
  };

  submitValidation = () => {
    return Boolean(this.props.productId) && Boolean(this.props.productName);
  };


  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3 align="center">Update Product</h3>
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
            <label>ProductId: </label>
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
            >
              Update Product
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

export default connect(mapStateToProps)(EditProduct)