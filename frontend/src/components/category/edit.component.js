import React, {Component} from "react"
import axios from "axios"
import Switch from "react-switch"
import ImageUploader from 'react-images-upload'
import {connect} from "react-redux"
import {
  updateCategory,
  editCategoryError,
  fetchCategoryError,
} from "../../actions/categoryActions"

class EditCategory extends Component {
  state = {
    categoryName: '',
    isRootCategory: false,
    isVisible: false,
    image: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/categories/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          categoryName: response.data.categoryName,
          isRootCategory: response.data.isRootCategory,
          isVisible: response.data.isVisible,
          image: response.data.image
        })
      })
      .catch(err => this.props.dispatch(fetchCategoryError(err)))
  }

  onChangeCategoryName = e => this.setState({categoryName: e.target.value});

  isRootCategoryChange = checked => this.setState({isRootCategory: checked});

  onVisibilityChange = (checked) => this.setState({isVisible: checked});

  onDropImage = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (e) => this.setState({image: e.target.result})
  };

  onSubmit = e => {
    e.preventDefault();

    const editedCategory = {
      categoryName: this.state.categoryName,
      isRootCategory: this.state.isRootCategory,
      isVisible: this.state.isVisible,
      image: this.state.image
    };

    axios
      .put("http://localhost:4000/api/categories/" + this.props.match.params.id, editedCategory)
      .then(res=> {
        this.props.dispatch(updateCategory(res.data));
        this.props.history.push("/category/index")
      })
      .catch(err => this.props.dispatch(editCategoryError(err)));
  };

  submitValidation = () => Boolean(this.state.categoryName);

  handleDiscardChange = () => this.props.history.push("/category/index");

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
            <label>
              <span style={{marginRight: 20}}>Root Cat</span>
              <Switch
                onChange={this.isRootCategoryChange}
                checked={this.state.isRootCategory}
              />
            </label>
            <label style={{marginLeft: 20}}>
              <span style={{marginRight: 20}}>Visibility</span>
              <Switch onChange={this.onVisibilityChange} checked={this.state.isVisible}/>
            </label>
          </div>
          <div className="form-group">
            <label>Category Image: </label>
            <ImageUploader
              withIcon={true}
              buttonText='Choose image'
              onChange={this.onDropImage}
              imgExtension={['.jpg', '.gif', '.png', 'jpeg']}
              maxFileSize={5242880}
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
            <button
              style={{marginLeft: 20}}
              type="reset"
              className="btn btn-secondary"
              onClick={this.handleDiscardChange}
            >
              Discard Changes
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {categories: state.categoryReducer.categories}
};

export default connect(mapStateToProps)(EditCategory)