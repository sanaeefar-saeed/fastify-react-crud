import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  changeProductName,
  changeProductId,
  changeId,
  changeCategoryId,
  changeTitle,
  changeCount,
  changeCond,
  changePrice,
  changeParseDate,
  changeDescription,
  changeCurier,
  changeGuarantee,
  changeUrl,
  changeDt,
  changeManagerId,
  changeStatus,
  changeCtype,
  changePrimeCategory,
  changeStoreId,
  changePrimeCatName,
  createProductError
} from "../../actions/productActions";

class CreateProduct extends Component {
  clearInputs = () => {
    this.props.dispatch(changeProductName(""));
    this.props.dispatch(changeProductId(""));
    this.props.dispatch(changeId(""));
    this.props.dispatch(changeCategoryId(""));
    this.props.dispatch(changeTitle(""));
    this.props.dispatch(changeCount(""));
    this.props.dispatch(changeCond(""));
    this.props.dispatch(changePrice(""));
    this.props.dispatch(changeParseDate(""));
    this.props.dispatch(changeDescription(""));
    this.props.dispatch(changeCurier(""));
    this.props.dispatch(changeGuarantee(""));
    this.props.dispatch(changeUrl(""));
    this.props.dispatch(changeDt(""));
    this.props.dispatch(changeManagerId(""));
    this.props.dispatch(changeStatus(""));
    this.props.dispatch(changeCtype(""));
    this.props.dispatch(changePrimeCategory(""));
    this.props.dispatch(changeStoreId(""));
    this.props.dispatch(changePrimeCatName(""));
  };

  componentDidMount() {
    this.clearInputs();
  }

  onChangeProductName = e =>
    this.props.dispatch(changeProductName(e.target.value));

  onChangeProductId = e => this.props.dispatch(changeProductId(e.target.value));
  onChangeId = e => this.props.dispatch(changeId(e.target.value));
  onChangeCategoryId = e =>
    this.props.dispatch(changeCategoryId(e.target.value));
  onChangeTitle = e => this.props.dispatch(changeTitle(e.target.value));
  onChangeCount = e => this.props.dispatch(changeCount(e.target.value));
  onChangeCond = e => this.props.dispatch(changeCond(e.target.value));
  onChangePrice = e => this.props.dispatch(changePrice(e.target.value));
  onChangeParseDate = e => this.props.dispatch(changeParseDate(e.target.value));
  onChangeDescription = e =>
    this.props.dispatch(changeDescription(e.target.value));
  onChangeCurier = e => this.props.dispatch(changeCurier(e.target.value));
  onChangeGuarantee = e => this.props.dispatch(changeGuarantee(e.target.value));
  onChangeUrl = e => this.props.dispatch(changeUrl(e.target.value));
  onChangeDt = e => this.props.dispatch(changeDt(e.target.value));
  onChangeManagerId = e => this.props.dispatch(changeManagerId(e.target.value));
  onChangeStatus = e => this.props.dispatch(changeStatus(e.target.value));
  onChangeCtype = e => this.props.dispatch(changeCtype(e.target.value));
  onChangePrimeCategory = e =>
    this.props.dispatch(changePrimeCategory(e.target.value));
  onChangeStoreId = e => this.props.dispatch(changeStoreId(e.target.value));
  onChangePrimeCatName = e =>
    this.props.dispatch(changePrimeCatName(e.target.value));
  onSubmit = e => {
    e.preventDefault();
    const newProduct = {
      productId: this.props.productId,
      productName: this.props.productName,
      id: this.props.id,
      categoryId: this.props.categoryId,
      title: this.props.title,
      count: this.props.count,
      cond: this.props.cond,
      price: this.props.price,
      parseDate: this.props.parseDate,
      description: this.props.description,
      curier: this.props.curier,
      guarantee: this.props.guarantee,
      url: this.props.url,
      dt: this.props.dt,
      managerId: this.props.managerId,
      status: this.props.status,
      ctype: this.props.ctype,
      primeCategory: this.props.primeCategory,
      storeId: this.props.storeId,
      primeCatName: this.props.primeCatName
    };
    axios
      .post("http://localhost:4000/api/products", newProduct)
      // todo remove this console log
      .then(res => console.log(res.data))
      .catch(err => this.props.dispatch(createProductError(err)));

    this.clearInputs();
  };

  submitValidation = () => {
    return Boolean(this.props.productId) && Boolean(this.props.productName);
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Product Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.props.productName}
              onChange={this.onChangeProductName}
            />
          </div>
          <div className="form-group">
            <label>Product ID: </label>
            <input
              type="text"
              className="form-control"
              value={this.props.productId}
              onChange={this.onChangeProductId}
            />
          </div>
          <div className="form-group">
            <label>CATEGORYID:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.categoryId}
              onChange={this.onChangeCategoryId}
            />
          </div>

          <div className="form-group">
            <label>TITLE:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.title}
              onChange={this.onChangeTitle}
            />
          </div>

          <div className="form-group">
            <label>COUNT:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.count}
              onChange={this.onChangeCount}
            />
          </div>

          <div className="form-group">
            <label>COND:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.cond}
              onChange={this.onChangeCond}
            />
          </div>

          <div className="form-group">
            <label>PRICE:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.price}
              onChange={this.onChangePrice}
            />
          </div>

          <div className="form-group">
            <label>PARSEDATE:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.parseDate}
              onChange={this.onChangeParseDate}
            />
          </div>

          <div className="form-group">
            <label>DESCRIPTION:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>CURIER:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.curier}
              onChange={this.onChangeCurier}
            />
          </div>

          <div className="form-group">
            <label>GUARANTEE:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.guarantee}
              onChange={this.onChangeGuarantee}
            />
          </div>

          <div className="form-group">
            <label>URL:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.url}
              onChange={this.onChangeUrl}
            />
          </div>

          <div className="form-group">
            <label>DT:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.dt}
              onChange={this.onChangeDt}
            />
          </div>

          <div className="form-group">
            <label>MANAGERID:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.managerId}
              onChange={this.onChangeManagerId}
            />
          </div>

          <div className="form-group">
            <label>STATUS:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.status}
              onChange={this.onChangeStatus}
            />
          </div>

          <div className="form-group">
            <label>CTYPE:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.ctype}
              onChange={this.onChangeCtype}
            />
          </div>

          <div className="form-group">
            <label>PRIMECATEGORY:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.primeCategory}
              onChange={this.onChangePrimeCategory}
            />
          </div>

          <div className="form-group">
            <label>STOREID:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.storeId}
              onChange={this.onChangeStoreId}
            />
          </div>

          <div className="form-group">
            <label>PRIMECATNAME:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.primeCatName}
              onChange={this.onChangePrimeCatName}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.submitValidation()}
              onClick={this.onSubmit}
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const productId = state.productReducer.productId;
  const productName = state.productReducer.productName;
  const id = state.productReducer.id;
  const categoryId = state.productReducer.categoryId;
  const title = state.productReducer.title;
  const count = state.productReducer.count;
  const cond = state.productReducer.cond;
  const price = state.productReducer.price;
  const parseDate = state.productReducer.parseDate;
  const description = state.productReducer.description;
  const curier = state.productReducer.curier;
  const guarantee = state.productReducer.guarantee;
  const url = state.productReducer.url;
  const dt = state.productReducer.dt;
  const managerId = state.productReducer.managerId;
  const status = state.productReducer.status;
  const ctype = state.productReducer.ctype;
  const primeCategory = state.productReducer.primeCategory;
  const storeId = state.productReducer.storeId;
  const primeCatName = state.productReducer.primeCatName;
  return {
    productName,
    productId,
    id,
    categoryId,
    title,
    count,
    cond,
    price,
    parseDate,
    description,
    curier,
    guarantee,
    url,
    dt,
    managerId,
    status,
    ctype,
    primeCategory,
    storeId,
    primeCatName
  };
};

export default connect(mapStateToProps)(CreateProduct);
