const GET_PRODUCTS = "GET_PRODUCTS";
const IS_FETCHING_PRODUCT = "IS_FETCHING_PRODUCT";
const CREATE_PRODUCT_ERROR = "CREATE_PRODUCT_ERROR";
const EDIT_PRODUCT_ERROR = "EDIT_PRODUCT_ERROR";
const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";
const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";

const getProducts = products => ({type: GET_PRODUCTS, products});
const isFetchingProduct = bool => ({type: IS_FETCHING_PRODUCT, bool});
const createProductError = err => ({type: CREATE_PRODUCT_ERROR, err});
const editProductError = err => ({type: EDIT_PRODUCT_ERROR, err});
const fetchProductError = err => ({type: FETCH_PRODUCT_ERROR, err});
const deleteProductError = err => ({type: DELETE_PRODUCT_ERROR, err});

export {
  GET_PRODUCTS,
  IS_FETCHING_PRODUCT,
  CREATE_PRODUCT_ERROR,
  EDIT_PRODUCT_ERROR,
  FETCH_PRODUCT_ERROR,
  DELETE_PRODUCT_ERROR,
  getProducts,
  isFetchingProduct,
  createProductError,
  editProductError,
  fetchProductError,
  deleteProductError
};
