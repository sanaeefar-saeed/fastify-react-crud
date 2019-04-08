import React, {Component} from "react";
import axios from "axios";

export default class EditProduct extends Component {
  state = {
    productName: "",
    productId: "",
    fetchProductError: false,
    submitEditedProductError: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/products/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          productName: response.data.productName,
          productId: response.data.productId
        });
      })
      .catch(err => this.setState({fetchProductError: err}))
  }

  onChangeProductName = e => this.setState({productName: e.target.value});

  onChangeParentId = e => this.setState({productId: e.target.value});

  onSubmit = e => {
    e.preventDefault();
    const editedProduct = {
      productName: this.state.productName,
      productId: this.state.productId
    };
    axios
      .put("http://localhost:4000/api/products/" + this.props.match.params.id, editedProduct)
      // todo: remove console log for promise object !
      .then(res => console.log(res.data))
      .catch(err => this.setState({submitEditedProductError: err}));

    this.props.history.push("/productIndex");
  };

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3 align="center">Update Category</h3>
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
            <label>ParentId: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.productId}
              onChange={this.onChangeParentId}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Category"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
