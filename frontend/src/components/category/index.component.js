import React, {Component} from "react";
import axios from "axios";
import TableRow from "./TableRow";
import {connect} from 'react-redux'
import {
  getAllCategories,
  deleteCategory,
  isFetchingCategory,
  fetchCategoryError,
  deleteCategoryError
} from "../../actions/categoryActions";

class CategoryIndex extends Component {

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/categories")
      .then(response => {
        this.props.dispatch(getAllCategories(response.data));
        this.props.dispatch(isFetchingCategory(false))
      })
      .catch(err => this.props.dispatch(fetchCategoryError(err)))
  }

  handleDelete = id => {
    axios
      .delete("http://localhost:4000/api/categories/" + id)
      .then(res => this.props.dispatch(deleteCategory(res.data._id)))
      .catch(err => this.props.dispatch(deleteCategoryError(err)));
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
            <th>Image</th>
            <th>Add subCat</th>
            <th>Edit Cat</th>
            <th>Remove Cat</th>
          </tr>
          </thead>
          <tbody>
          {this.props.categories.map(category => {
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

const mapStateToProps = state => {
  return {categories: state.categoryReducer.categories}
};

export default connect(mapStateToProps)(CategoryIndex)