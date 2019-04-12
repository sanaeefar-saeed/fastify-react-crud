import React, {Component} from "react"
import axios from "axios"
import {connect} from "react-redux"
import {
  changeCategoryName,
  changeImage,
  changeIsActive,
  createCategoryError
} from "../../actions/categoryActions"

class CreateCategory extends Component {

  clearInputs = () => {
    this.props.dispatch(changeCategoryName(""));
    this.props.dispatch(changeImage(""));
    this.props.dispatch(changeIsActive(""));
  };

  componentDidMount() {
    this.clearInputs()
  }

  onChangeCategoryName = e => this.props.dispatch(changeCategoryName(e.target.value));

  onChangeImage = e => this.props.dispatch(changeImage(e.target.value));

  onChangeIsActive = e => this.props.dispatch(changeIsActive(e.target.value));

  onSubmit = e => {
    e.preventDefault();
    const newCategory = {
      categoryName: this.props.categoryName,
      parentId: this.props.match.params.id,
      isActive: this.props.isActive
    };
    axios
      .post("http://localhost:4000/api/categories", newCategory)
      .then(res => {
        window.location.reload();
        console.log(res.data);
      })
      .catch(err => this.props.dispatch(createCategoryError(err)));

    this.clearInputs()
  };

  submitValidation = () => {
    return Boolean(this.props.categoryName);
    // &&Boolean(this.props.isActive)
    // && Boolean(this.props.image)
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
            <label>Category Image: </label>
            <input
              type="file"
              className="form-control"
              value={this.props.image}
              onChange={this.onChangeImage}
            />
          </div>
          <div className="form-group">
            <label>Visibility: </label>
            <input
              type="text"
              className="form-control"
              value={this.props.isActive}
              onChange={this.onChangeIsActive}
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

const mapStateToProps = state => {
  const categoryName = state.categoryReducer.categoryName;
  const image = state.categoryReducer.image;
  const isActive = state.categoryReducer.isActive;

  return {categoryName, image, isActive}
};

export default connect(mapStateToProps)(CreateCategory)
