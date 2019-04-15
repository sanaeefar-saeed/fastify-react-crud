import React, { Component } from "react";
import axios from "axios";
import Switch from "react-switch";
import ImageUploader from "react-images-upload";
import { connect } from "react-redux";
import {
  getSpecs,
  editSpecError,
  fetchSpecError
} from "../../actions/specActions";

class EditSpec extends Component {
  state = {
    specName: "",
    specValue: "",
    isVisible: false,
    image: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/specs/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          specName: response.data.specName,
          specValue: response.data.specValue,
          isVisible: response.data.isVisible,
          image: response.data.image
        });
      })
      .catch(err => this.props.dispatch(fetchSpecError(err)));
  }

  onChangeSpecName = e => this.setState({ specName: e.target.value });

  onChangeSpecValue = e => this.setState({ specValue: e.target.value });

  onVisibilityChange = checked => this.setState({ isVisible: checked });

  onDropImage = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = e => this.setState({ image: e.target.result });
  };

  onSubmit = e => {
    e.preventDefault();

    const editedSpecId = this.props.match.params.id;

    const editedSpec = {
      specName: this.state.specName,
      specValue: this.state.specValue,
      isVisible: this.state.isVisible,
      image: this.state.image
    };

    const newSpecs = this.props.specs.map(spec => {
      if (spec._id === editedSpecId)
        return { _id: editedSpecId, ...editedSpec };
      else return spec;
    });

    axios
      .put("http://localhost:4000/api/specs/" + editedSpecId, editedSpec)
      .then(res => this.props.dispatch(getSpecs(newSpecs)))
      .catch(err => this.props.dispatch(editSpecError(err)));

    this.props.history.push("/spec/index");
  };

  submitValidation = () =>
    Boolean(this.state.specName) && Boolean(this.state.specValue);

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Spec</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Spec Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specName}
              onChange={this.onChangeSpecName}
            />
          </div>
          <div className="form-group">
            <label>Spec Value: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specValue}
              onChange={this.onChangeSpecValue}
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
            <label>Spec Image: </label>
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
              Save Spec
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { specs: state.specReducer.specs };
};

export default connect(mapStateToProps)(EditSpec);
