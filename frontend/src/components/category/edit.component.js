import React, {Component} from "react";
import axios from "axios";

export default class EditCategory extends Component {
  state = {
    categoryName: "",
    parentId: "",
    editError: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/categories/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          categoryName: response.data.categoryName,
          parentId: response.data.parentId
        });
      })
      .catch(err => this.setState({editError: err}));
  }


  onChangeCategoryName = e => this.setState({categoryName: e.target.value});

  onChangeParentId = e => this.setState({parentId: e.target.value});

  onSubmit = e => {
    e.preventDefault();
    const editedObject = {
      categoryName: this.state.categoryName,
      parentId: this.state.parentId
    };
    axios
      .put("http://localhost:4000/api/categories/" + this.props.match.params.id, editedObject)
      .then(res => console.log(res.data));

    this.props.history.push("/category/index");
    // this.props.history.goBack();
  };

  submitValidation = () => {
    return Boolean(this.state.categoryName) && Boolean(this.state.parentId);
  };

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3 align="center">Update Category</h3>
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
            <label>ParentId: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.parentId}
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
