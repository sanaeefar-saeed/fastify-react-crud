import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {
  changeCategoryName,
  changeParentId,
  createCategoryError
} from "../../actions/categoryActions";

class CreateCategory extends Component {
  clearInputs = () => {
    this.props.dispatch(changeCategoryName(''));
    this.props.dispatch(changeParentId(''))
  };

  componentDidMount() {
    this.clearInputs();
  }

  onChangeCategoryName = e => this.props.dispatch(changeCategoryName(e.target.value));

  onChangeParentId = e => this.props.dispatch(changeParentId(e.target.value));

  onSubmit = e => {
    e.preventDefault();
    const newCategory = {
      categoryName: this.props.categoryName,
      parentId: this.props.parentId
    };
    axios
      .post("http://localhost:4000/api/categories", newCategory)
      .then(res => console.log(res.data))
      .then(this.clearInputs)
      .catch(err => this.props.dispatch(createCategoryError(err)));
  };

  submitValidation = () => {
    return Boolean(this.props.categoryName) && Boolean(this.props.parentId);
  };

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Add New Category</h3>
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
            <label>Parent ID: </label>
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
              Save Category
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const categoryName = state.categoryReducer.categoryName;
  const parentId = state.categoryReducer.parentId;

  return {categoryName, parentId}
};

export default connect(mapStateToProps)(CreateCategory)