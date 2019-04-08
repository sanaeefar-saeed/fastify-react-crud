import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onChangeParentId = this.onChangeParentId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      categoryName: "",
      parentId: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/categories/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          categoryName: response.data.categoryName,
          parentId: response.data.parentId
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeCategoryName(e) {
    this.setState({
      categoryName: e.target.value
    });
  }
  onChangeParentId(e) {
    this.setState({
      parentId: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      categoryName: this.state.categoryName,
      parentId: this.state.parentId
    };
    axios
      .put(
        "http://localhost:4000/api/categories/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/index");
  }

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
            <input
              type="submit"
              value="Update Category"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
