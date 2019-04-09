import React, {Component} from "react";
import axios from "axios";
import TableRow from "./TableRow";
import {connect} from 'react-redux'
import {
  getProducts,
  isFetchingProduct,
  fetchProductError,
  deleteProductError
} from "../../actions/productActions";

class ProductIndex extends Component {

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/products")
      .then(response => {
        this.props.dispatch(getProducts(response.data));
        this.props.dispatch(isFetchingProduct(false))
      })
      .catch(err => {
        this.props.dispatch(fetchProductError(err))
      });
  }

  handleDelete = id => {
    const products = this.props.products.filter(product => product._id !== id);
    axios
      .delete("http://localhost:4000/api/products/" + id)
      .catch(err => this.props.dispatch(deleteProductError(err)));

    this.props.dispatch(getProducts(products));
  };

  render() {
    return (
      <div>
        <h3 align="center">Product List</h3>
        <table className="table table-striped" style={{marginTop: 20}}>
          <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
          </tr>
          </thead>
          <tbody>
          {this.props.products.map(product => {
            return (
              <TableRow
                product={product}
                key={product._id}
                onDelete={this.handleDelete}
              />
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const products = state.productReducer.products;

  return {products}
};

export default connect(mapStateToProps)(ProductIndex)