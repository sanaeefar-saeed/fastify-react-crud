const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const IS_FETCHING_PRODUCT = "IS_FETCHING_PRODUCT";
const CREATE_PRODUCT_ERROR = "CREATE_PRODUCT_ERROR";
const EDIT_PRODUCT_ERROR = "EDIT_PRODUCT_ERROR";
const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";
const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";

const getAllProducts = products => ({type: GET_ALL_PRODUCTS, products});
const addProduct = product => ({type: ADD_PRODUCT, product});
const updateProduct = product => ({type: UPDATE_PRODUCT, product});
const deleteProduct = id => ({type: DELETE_PRODUCT, id});
const isFetchingProduct = bool => ({type: IS_FETCHING_PRODUCT, bool});
const createProductError = err => ({type: CREATE_PRODUCT_ERROR, err});
const editProductError = err => ({type: EDIT_PRODUCT_ERROR, err});
const fetchProductError = err => ({type: FETCH_PRODUCT_ERROR, err});
const deleteProductError = err => ({type: DELETE_PRODUCT_ERROR, err});

export {
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  IS_FETCHING_PRODUCT,
  CREATE_PRODUCT_ERROR,
  EDIT_PRODUCT_ERROR,
  FETCH_PRODUCT_ERROR,
  DELETE_PRODUCT_ERROR,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  isFetchingProduct,
  createProductError,
  editProductError,
  fetchProductError,
  deleteProductError
};
