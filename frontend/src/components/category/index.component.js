import React, {Component} from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class CategoryIndex extends Component {
  state = {
    categories: [],
    isFetchingData: true,
    fetchCategoryError: false,
    deleteCategoryError: false
  };

  fetchData = () => {
    axios
      .get("http://localhost:4000/api/categories")
      .then(response => {
        this.setState({
          categories: response.data,
          isFetchingData: false
        });
      })
      .catch(err => {
        this.setState({fetchCategoryError: err});
      })
  };

  componentDidMount() {
    this.fetchData()
  }

  // @novonimo
  // for re-render after submit edit !
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.fetchData()
  }

  handleDelete = id => {
    const categories = this.state.categories.filter(category => category._id !== id);
    axios
      .delete("http://localhost:4000/api/categories/" + id)
      .catch(err=>this.setState({deleteCategoryError: err}));

    this.setState({categories})
  };

  render() {
    return (
      <div>
        <h3 align="center">Category List</h3>
        <table className="table table-striped" style={{marginTop: 20}}>
          <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
          </tr>
          </thead>
          <tbody>
          {this.state.categories.map(category => {
            return <TableRow
              category={category}
              key={category._id}
              onDelete={this.handleDelete}
            />
          })}
          </tbody>
        </table>
      </div>
    )
  }
}
