import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  changeCategoryName,
  changeParentId,
  editCategoryError
} from "../../actions/categoryActions";

class EditCategory extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/categories/" + this.props.match.params.id)
      .then(response => {
        this.props.dispatch(changeCategoryName(response.data.categoryName));
        this.props.dispatch(changeParentId(response.data.parentId));
      })
      .catch(err => console.log(err));
  }

  onChangeCategoryName = e =>
    this.props.dispatch(changeCategoryName(e.target.value));

  onChangeParentId = e => this.props.dispatch(changeParentId(e.target.value));

  onSubmit = e => {
    e.preventDefault();
    const editedObject = {
      categoryName: this.props.categoryName,
      parentId: this.props.parentId
    };
    axios
      .put(
        "http://localhost:4000/api/categories/" + this.props.match.params.id,
        editedObject
      )
      .then(res => {
        window.location.reload();
        console.log(res.data);
      })
      .catch(err => this.props.dispatch(editCategoryError(err)));

    this.props.history.push("/category/index");
  };

  submitValidation = () => {
    return Boolean(this.props.categoryName) && Boolean(this.props.parentId);
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Category</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Category Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.props.categoryName}
              onChange={this.onChangeCategoryName}
            />
          </div>
          <div className="form-group">
            <label>ParentId: </label>
            <input
              type="text"
              className="form-control"
              value={this.props.parentId}
              onChange={this.onChangeParentId}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.submitValidation()}
            >
              Update Category
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const categoryName = state.categoryReducer.categoryName;
  const parentId = state.categoryReducer.parentId;
  const editCategoryError = state.categoryReducer.editCategoryError;

  return { categoryName, parentId, editCategoryError };
};

export default connect(mapStateToProps)(EditCategory);
