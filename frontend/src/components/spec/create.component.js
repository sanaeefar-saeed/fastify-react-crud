import React, { Component } from "react";
import axios from "axios";
import Switch from "react-switch";
import ImageUploader from "react-images-upload";
import { connect } from "react-redux";
import { createSpecError } from "../../actions/specActions";

class CreateSpec extends Component {
  state = {
    specName: "",
    specValue: "",
    isVisible: false,
    image: null
  };

  clearInputs = () => {
    this.setState({
      specName: "",
      specValue: "",
      isVisible: false,
      image: null
    });
  };

  componentDidMount() {
    this.clearInputs();
  }

  onChangeSpecsName = e => this.setState({ specName: e.target.value });

  onChangeSpecsValue = e => this.setState({ specValue: e.target.value });

  onDropImage = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = e => this.setState({ image: e.target.result });
  };

  onVisibilityChange = checked => this.setState({ isVisible: checked });

  onSubmit = e => {
    e.preventDefault();

    const newSpecs = {
      specName: this.state.specName,
      specValue: this.state.specValue,
      parentId: this.props.match.params.id,
      isVisible: this.state.isVisible,
      image: this.state.image
    };

    axios
      .post("http://localhost:4000/api/specs", newSpecs)
      .catch(err => this.props.dispatch(createSpecError(err)));

    this.clearInputs();
  };

  submitValidation = () => {
    return Boolean(this.state.specName) && Boolean(this.state.specValue);
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Specs</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Specs Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specName}
              onChange={this.onChangeSpecsName}
            />
          </div>
          <div className="form-group">
            <label>Specs Value: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specValue}
              onChange={this.onChangeSpecsValue}
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
            <label>Specs Image: </label>
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
              Save Specs
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(CreateSpec);
