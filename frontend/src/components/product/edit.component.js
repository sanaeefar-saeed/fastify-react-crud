import React, {Component} from "react";
import RenderSpecField from "./renderSpecField";
import SpecField from './specField'
import axios from "axios";
import Switch from "react-switch";
import ImageUploader from "react-images-upload";
import {connect} from "react-redux";
import {
  updateProduct,
  editProductError,
  fetchProductError,
} from "../../actions/productActions";

class EditProduct extends Component {
  state = {
    categories: [],
    primeCategoryId: '',
    categoryId: '',
    productName: '',
    price: '',
    onSale: false,
    discount: '',
    salePrice: '',
    description: '',
    image: null,
    video: null,
    weight: '',
    guarantee: '',
    return: '',
    brand: '',
    visibility: false,
    addSpecStatus: false,
    specifications: [],
    specs: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/products/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          categories: this.props.categories,
          primeCategoryId: res.data.primeCategoryId,
          categoryId: res.data.categoryId,
          productName: res.data.productName,
          price: res.data.price,
          onSale: res.data.onSale,
          discount: res.data.discount,
          salePrice: res.data.salePrice,
          description: res.data.description,
          image: res.data.image,
          video: res.data.video,
          weight: res.data.weight,
          guarantee: res.data.guarantee,
          return: res.data.return,
          brand: res.data.brand,
          visibility: res.data.visibility,
          specifications: res.data.specifications,
          specs: this.props.specs
        })
      })
      .catch(err => this.props.dispatch(fetchProductError(err)));
  }

  changePrimeCategoryId = e => this.setState({primeCategoryId: e.target.value});

  changeCategoryId = e => this.setState({categoryId: e.target.value});

  changeProductName = e => this.setState({productName: e.target.value});

  changePrice = e => this.setState({price: e.target.value});

  changeOnSale = checked => this.setState({onSale: checked});

  changeDiscount = (discount, price) => this.setState({
    discount: discount,
    salePrice: price - (price * discount / 100)
  });

  showOnSaleOptions = () => (this.state.onSale ? <div>
    <label>Discount</label>
    <input
      style={{margin: 10}}
      type="text"
      placeholder={'On Percentage'}
      value={this.state.discount}
      onChange={(e) => this.changeDiscount(e.target.value, this.state.price)}/>
    <label>Sale Price</label>
    <input
      readOnly
      style={{margin: 10}}
      type="text"
      placeholder={'on GEL'}
      defaultValue={this.state.salePrice}
    />
  </div> : <></>);

  changeDescription = e => this.setState({description: e.target.value});

  onDropImage = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = e => this.setState({image: e.target.result});
  };

  onDropVideo = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = e => this.setState({video: e.target.result});
  };

  changeWeight = e => this.setState({weight: e.target.value});

  changeGuarantee = e => this.setState({guarantee: e.target.value});

  changeReturn = e => this.setState({return: e.target.value});

  changeBrand = e => this.setState({brand: e.target.value});

  changeVisibility = checked => this.setState({visibility: checked});

  changeSpecStatus = () => this.setState({addSpecStatus: !this.state.addSpecStatus});

  addSpecToProduct = (specId) => {
    const newSpec = this.state.specs.filter(spec => spec._id === specId);
    this.setState(prevState => ({
      specifications: [...prevState.specifications, newSpec[0]],
      addSpecStatus: false
    }))
  };

  deleteSpec = (specId) => {
    const newSpecifications = this.state.specifications.filter(spec => spec._id !== specId);
    this.setState({specifications: newSpecifications})
  };

  onSubmit = e => {
    e.preventDefault();

    const editedProduct = {
      primeCategoryId: this.state.primeCategoryId,
      categoryId: this.state.categoryId,
      productName: this.state.productName,
      price: this.state.price,
      onSale: this.state.onSale,
      discount: this.state.discount,
      salePrice: this.state.salePrice,
      description: this.state.description,
      image: this.state.image,
      video: this.state.video,
      weight: this.state.weight,
      guarantee: this.state.guarantee,
      return: this.state.return,
      brand: this.state.brand,
      visibility: this.state.visibility,
      specifications: this.state.specifications
    };

    axios
      .put("http://localhost:4000/api/products/" + this.props.match.params.id, editedProduct)
      .then(res => {
        this.props.dispatch(updateProduct(res.data));
        this.props.history.push("/product/index");
      })
      .catch(err => this.props.dispatch(editProductError(err)));
  };

  submitValidation = () => {
    return Boolean(this.state.primeCategoryId) &&
      Boolean(this.state.categoryId) &&
      Boolean(this.state.productName);
  };

  discardChanges = () => this.props.history.push("/product/index");

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3 align="center">Update Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <select
              className="form-control"
              value={this.state.primeCategoryId}
              onChange={this.changePrimeCategoryId}
            >
              <option value="">--Choose main category--</option>
              {this.state.categories
                .filter(category => category.isRootCategory)
                .map(category => (
                  <option
                    key={category._id}
                    value={category._id}
                  >{category.categoryName}
                  </option>))
              }
            </select>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              value={this.state.categoryId}
              onChange={this.changeCategoryId}
            >
              <option value="">--Choose category--</option>
              {this.state.categories
                .filter(category => category.parentId === this.state.primeCategoryId)
                .map(category => (
                  <option
                    key={category._id}
                    value={category._id}
                  >{category.categoryName}
                  </option>))
              }
            </select>
          </div>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder={'Add product name'}
              value={this.state.productName}
              onChange={this.changeProductName}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              style={{margin: 10}}
              placeholder={'GEL'}
              value={this.state.price}
              onChange={this.changePrice}
            />
            <span style={{marginRight: 5}}>On Sale</span>
            <Switch
              checked={this.state.onSale}
              onChange={this.changeOnSale}
            />

          </div>
          <>{this.showOnSaleOptions()}</>
          <div className="form-group">
            <label>Short Description</label>
            <textarea
              className="form-control"
              value={this.state.description}
              onChange={this.changeDescription}
            />
          </div>
          <div className="form-group">
            <label>Product Images </label>
            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              onChange={this.onDropImage}
              imgExtension={[".jpg", ".gif", ".png"]}
              maxFileSize={5242880}
            />
          </div>
          <div className="form-group">
            <label>Product Videos: </label>
            <ImageUploader
              withIcon={true}
              buttonText="Choose Videos"
              onChange={this.onDropVideo}
              imgExtension={[".mp4", ".3gp", ".vob"]}
              maxFileSize={26214400}
            />
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input
              type="text"
              className="form-control"
              placeholder={'in kg'}
              value={this.state.weight}
              onChange={this.changeWeight}/>
          </div>
          <div className="form-group">
            <label>Guarantee</label>
            <select
              className="form-control"
              value={this.state.guarantee}
              onChange={this.changeGuarantee}>
              <option value='0'>none</option>
              <option value='1'>1 year</option>
              <option value='2'>2 year</option>
              <option value='3'>3 year</option>
            </select>
          </div>
          <div className="form-group">
            <label>Return:</label>
            <select
              className="form-control"
              value={this.state.return}
              onChange={this.changeReturn}
            >
              <option value='0'>none</option>
              <option value='1'>1 day</option>
              <option value='3'>3 day</option>
              <option value='5'>5 day</option>
            </select>
          </div>
          <div className="form-group">
            <label>Builder</label>
            <select
              className="form-control"
              value={this.state.brand}
              onChange={this.changeBrand}
            >
              <option value='0'>Brand</option>
              <option value='Apple'>Apple</option>
              <option value='Motorola'>Motorola</option>
              <option value='Samsung'>Samsung</option>
              <option value='LG'>LG</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <span style={{marginRight: 20}}>Visibility</span>
              <Switch
                checked={this.state.visibility}
                onChange={this.changeVisibility}
              />
            </label>
          </div>
          <div id={'specifications'}>
            <h4>Specifications</h4>
            <RenderSpecField
              specifications={this.state.specifications}
              deleteSpec={this.deleteSpec}
            />
            {this.state.addSpecStatus
              ? <SpecField
                changeSpecStatus={this.changeSpecStatus}
                addSpecToProduct={this.addSpecToProduct}
                specs={this.state.specs}/>
              : null
            }
            <button
              style={{marginTop: 10, marginBottom: 20}}
              type="button"
              className="btn btn-primary"
              onClick={this.changeSpecStatus}
            >
              Add Specification
            </button>
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
              onClick={this.discardChanges}
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
  const categories = state.categoryReducer.categories;
  const specs = state.specReducer.specs;
  return {categories, specs}
};

export default connect(mapStateToProps)(EditProduct)