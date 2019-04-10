import {
  GET_PRODUCTS,
  IS_FETCHING_PRODUCT,
  FETCH_PRODUCT_ERROR,
  DELETE_PRODUCT_ERROR,
  CHANGE_PRODUCT_NAME,
  CHANGE_PRODUCT_ID,
  CREATE_PRODUCT_ERROR,
  EDIT_PRODUCT_ERROR
} from "../actions/productActions";

const initialState = {
  products: [],
  isFetchingProduct: true,
  productName: '',
  productId: '',
  errors: [{
    createProductError: false,
    editProductError: false,
    fetchProductError: false,
    deleteProductError: false
  }]
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case (GET_PRODUCTS):
      return {
        ...state,
        products: action.products
      };
    case (IS_FETCHING_PRODUCT):
      return {
        ...state,
        isFetchingProduct: action.bool
      };
    case (FETCH_PRODUCT_ERROR):
      return {
        ...state,
        errors: [{
          ...state.errors,
          fetchProductError: action.fetchProductError
        }]
      };
    case (DELETE_PRODUCT_ERROR):
      return {
        ...state,
        errors: [{
          ...state.errors,
          deleteProductError: action.deleteProductError
        }]
      };
    case (CHANGE_PRODUCT_NAME):
      return {
        ...state,
        productName: action.productName
      };
    case(CHANGE_PRODUCT_ID):
      return {
        ...state,
        productId: action.productId
      };
    case(CREATE_PRODUCT_ERROR):
      return {
        ...state,
        errors: [{
          ...state.errors,
          createProductError: action.createProductError
        }]
      };
    case (EDIT_PRODUCT_ERROR):
      return {
        ...state,
        errors: [{
          ...state.errors,
          editProductError: action.editProductError
        }]
      };
    default:
      return state
  }
};

export default productReducer