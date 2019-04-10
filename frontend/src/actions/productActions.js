const GET_PRODUCTS = 'GET_PRODUCTS';
const IS_FETCHING_PRODUCT = 'IS_FETCHING_PRODUCT';
const CHANGE_PRODUCT_NAME = 'CHANGE_PRODUCT_NAME';
const CHANGE_PRODUCT_ID = 'CHANGE_PRODUCT_ID';
const CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR';
const EDIT_PRODUCT_ERROR = 'EDIT_PRODUCT_ERROR';
const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';
const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR';

const getProducts = (products) => ({type: GET_PRODUCTS, products});
const isFetchingProduct = (bool) => ({type: IS_FETCHING_PRODUCT, bool});
const fetchProductError = (fetchProductError) => ({type: FETCH_PRODUCT_ERROR, fetchProductError});
const deleteProductError = (deleteProductError) => ({type: DELETE_PRODUCT_ERROR, deleteProductError});

const changeProductName = (productName) => ({type: CHANGE_PRODUCT_NAME, productName});
const changeProductId = (productId) => ({type: CHANGE_PRODUCT_ID, productId});
const createProductError = (createProductError) => ({type: CREATE_PRODUCT_ERROR, createProductError});
const editProductError = (editProductError) => ({type: EDIT_PRODUCT_ERROR, editProductError});

export {
  GET_PRODUCTS,
  IS_FETCHING_PRODUCT,
  FETCH_PRODUCT_ERROR,
  DELETE_PRODUCT_ERROR,
  CHANGE_PRODUCT_ID,
  CREATE_PRODUCT_ERROR,
  CHANGE_PRODUCT_NAME,
  EDIT_PRODUCT_ERROR,
  getProducts,
  isFetchingProduct,
  fetchProductError,
  deleteProductError,
  changeProductName,
  changeProductId,
  createProductError,
  editProductError
}