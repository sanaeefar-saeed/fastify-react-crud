import React, {Component} from "react";
import axios from "axios";
import TableRow from "./TableRow";
import FilterAndSearchBar from './filterAndSearchBar'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {
  getAllProducts,
  deleteProduct,
  isFetchingProduct,
  fetchProductError,
  deleteProductError
} from "../../actions/productActions";

class ProductIndex extends Component {

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/products")
      .then(response => {
        this.props.dispatch(getAllProducts(response.data));
        this.props.dispatch(isFetchingProduct(false))
      })
      .catch(err => {
        this.props.dispatch(fetchProductError(err))
      });
  }

  handleDeleteOneProduct = id => {
    axios
      .delete("http://localhost:4000/api/products/" + id)
      .then(res => this.props.dispatch(deleteProduct(res.data._id)))
      .catch(err => this.props.dispatch(deleteProductError(err)));
  };

  handleDeleteAllSelected = () => {
    this.props.products
      .filter(product => product.selected)
      .map(product => this.handleDeleteOneProduct(product._id))
  };

  render() {
    return (
      <div>
        <h3 align="center">Product List</h3>
        <div>
          <div id='createNewProduct' style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <Link to={"/product/create"} className={"btn btn-primary"}>
              + Create New Product
            </Link>
          </div>
          <div style={{display: 'flex', marginBottom: 20}}>
            <div style={{flex: 1}}>
              <button className={"btn btn-danger"} onClick={this.handleDeleteAllSelected}>
                Delete Selected
              </button>
            </div>
          </div>
        </div>
        <FilterAndSearchBar/>
        <table className="table table-striped" style={{marginTop: 20}}>
          <thead>
          <tr>
            <th>Select</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>In Stoke</th>
            <th>Edit Product</th>
            <th>Remove</th>
          </tr>
          </thead>
          <tbody>
          {/*spinner*/}
          {/*{this.props.isFetchingProduct ? <tr className="spinner-border text-warning"/> : null}*/}
          {this.props.products.map((product, index) => {
            if (index <= this.props.itemsToShow - 1) {
              return (
                <TableRow
                  product={product}
                  key={product._id}
                  onDelete={this.handleDeleteOneProduct}
                />
              );
            } else {
              return null
            }
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const products = state.productReducer.products;
  const isFetchingProduct = state.productReducer.isFetchingProduct;
  const itemsToShow = state.filterReducer.itemsToShow;
  const renderedProductsID = state.filterReducer.renderedProductsID;

  return {products, isFetchingProduct, itemsToShow, renderedProductsID}
};

export default connect(mapStateToProps)(ProductIndex)