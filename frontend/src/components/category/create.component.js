import React, {Component} from "react";
import axios from "axios";

export default class CreateCategory extends Component {
  state = {
    categoryName: "",
    parentId: "",
    createCategoryError: false
  };

  onChangeCategoryName = e => {
    this.setState({categoryName: e.target.value})
  };

  onChangeParentId = e => {
    this.setState({parentId: e.target.value})
  };

  onSubmit = e => {
    e.preventDefault();
    const newCategory = {
      categoryName: this.state.categoryName,
      parentId: this.state.parentId
    };
    axios
      .post("http://localhost:4000/api/categories", newCategory)
      .then(res => console.log(res.data))
      .catch(err => this.setState({createCategoryError: err}));

    this.setState({
      categoryName: "",
      parentId: ""
    });
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
              value={this.state.categoryName}
              onChange={this.onChangeCategoryName}
            />
          </div>
          <div className="form-group">
            <label>Parent ID: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.parentId}
              onChange={this.onChangeParentId}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Save Category"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
