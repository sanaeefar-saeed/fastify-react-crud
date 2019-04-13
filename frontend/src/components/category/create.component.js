import React, { Component } from "react";
import axios from "axios";
import Switch from "react-switch";
import ImageUploader from "react-images-upload";
import { connect } from "react-redux";
import { createCategoryError } from "../../actions/categoryActions";

class CreateCategory extends Component {
  state = {
    categoryName: "",
    isVisible: false,
    image: null
  };

  clearInputs = () => {
    this.setState({
      categoryName: "",
      isVisible: false,
      image: null
    });
  };

  componentDidMount() {
    this.clearInputs();
  }

  onChangeCategoryName = e => this.setState({ categoryName: e.target.value });

  onDropImage = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = e => this.setState({ image: e.target.result });
  };

  onVisibilityChange = checked => this.setState({ isVisible: checked });

  onSubmit = e => {
    e.preventDefault();

    const newCategory = {
      categoryName: this.state.categoryName,
      parentId: this.props.match.params.id,
      isVisible: this.state.isVisible,
      image: this.state.image
    };

    axios
      .post("http://localhost:4000/api/categories", newCategory)
      .catch(err => this.props.dispatch(createCategoryError(err)));

    this.clearInputs();
  };

  submitValidation = () => {
    return Boolean(this.state.categoryName);
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
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
            <label>
              <span style={{ marginRight: 20 }}>Visibility</span>
              <Switch
                onChange={this.onVisibilityChange}
                checked={this.state.isVisible}
              />
            </label>
          </div>
          <div className="form-group">
            <label>Category Image: </label>
            <ImageUploader
              withIcon={true}
              buttonText="Choose image"
              onChange={this.onDropImage}
              imgExtension={[".jpg", ".gif", ".png"]}
              maxFileSize={5242880}
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

export default connect()(CreateCategory);
