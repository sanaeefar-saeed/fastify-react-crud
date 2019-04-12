import React, {Component} from "react";
import axios from "axios";
import TableRow from "./TableRow";
import {connect} from 'react-redux'
import {
  getCategories,
  isFetchingCategory,
  fetchCategoryError,
  deleteCategoryError
} from "../../actions/categoryActions";

class CategoryIndex extends Component {

  componentDidMount() {
    console.log('component did mount');
    axios
      .get("http://localhost:4000/api/categories")
      .then(response => {
        this.props.dispatch(getCategories(response.data));
        this.props.dispatch(isFetchingCategory(false))
      })
      .catch(err => this.props.dispatch(fetchCategoryError(err)))
  }

  handleDelete = id => {
    const categories = this.props.categories.filter(category => category._id !== id);
    axios
      .delete("http://localhost:4000/api/categories/" + id)
      .catch(err => this.props.dispatch(deleteCategoryError(err)));

    this.props.dispatch(getCategories(categories))
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
  const categories = state.categoryReducer.categories;

  return {categories}
};

export default connect(mapStateToProps)(CategoryIndex)