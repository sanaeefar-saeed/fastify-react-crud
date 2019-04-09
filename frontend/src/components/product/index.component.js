import React, {Component} from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class ProductIndex extends Component {
  state = {
    products: [],
    isFetchingData: true,
    fetchProductError: false,
    deleteProductError: false
  };

  fetchData = () => {
    axios
      .get("http://localhost:4000/api/products")
      .then(response => {
        this.setState({
          products: response.data,
          isFetchingData: false
        });
      })
      .catch(err => {
        this.setState({fetchProductError: err});
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  // @novonimo
  // for re-render after submit edit !
  // componentDidUpdate(prevProps, prevState, snapshot) {
  // this.fetchData();
  // }

  handleDelete = id => {
    const products = this.state.products.filter(product => product._id !== id);
    axios
      .delete("http://localhost:4000/api/products/" + id)
      .catch(err => this.setState({deleteProductError: err}));

    this.setState({products});
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
          {this.state.products.map(product => {
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
