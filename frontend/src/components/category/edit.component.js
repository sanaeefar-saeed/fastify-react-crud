import React, {Component} from "react"
import axios from "axios"
import Switch from "react-switch"
import ImageUploader from 'react-images-upload'
import {connect} from "react-redux"
import {
  getCategories,
  editCategoryError,
  fetchCategoryError,
} from "../../actions/categoryActions"

class EditCategory extends Component {
  state = {
    categoryName: '',
    isVisible: false,
    image: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/categories/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          categoryName: response.data.categoryName,
          isVisible: response.data.isVisible,
          image: response.data.image
        })
      })
      .catch(err => this.props.dispatch(fetchCategoryError(err)))
  }

  onChangeCategoryName = e => this.setState({categoryName: e.target.value});

  onVisibilityChange = (checked) => this.setState({isVisible: checked});

  onDropImage = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (e) => this.setState({image: e.target.result})
  };

  onSubmit = e => {
    e.preventDefault();

    const editedCategoryId = this.props.match.params.id;

    const editedCategory = {
      categoryName: this.state.categoryName,
      isVisible: this.state.isVisible,
      image: this.state.image
    };

    const newCategories = this.props.categories.map(category => {
      if (category._id === editedCategoryId) return {_id: editedCategoryId, ...editedCategory};
      else return category
    });

    axios
      .put("http://localhost:4000/api/categories/" + editedCategoryId, editedCategory)
      .then(res => this.props.dispatch(getCategories(newCategories)))
      .catch(err => this.props.dispatch(editCategoryError(err)));

    this.props.history.push("/category/index")
  };

  submitValidation = () => Boolean(this.state.categoryName);

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
          <div className='form-group'>
            <label>
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
              imgExtension={['.jpg', '.gif', '.png']}
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

const mapStateToProps = state => {
  return {categories: state.categoryReducer.categories}
};

export default connect(mapStateToProps)(EditCategory)