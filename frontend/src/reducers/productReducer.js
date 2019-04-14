import {
  GET_PRODUCTS,
  IS_FETCHING_PRODUCT,
  CREATE_PRODUCT_ERROR,
  EDIT_PRODUCT_ERROR,
  FETCH_PRODUCT_ERROR,
  DELETE_PRODUCT_ERROR
} from "../actions/productActions";

const initialState = {
  products: [],
  isFetchingProduct: true,
  errors: {
    createProductError: false,
    editProductError: false,
    fetchProductError: false,
    deleteProductError: false
  }
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
    case(CREATE_PRODUCT_ERROR):
      return {
        ...state,
        errors: {
          ...state.errors,
          createProductError: action.err
        }
      };
    case (EDIT_PRODUCT_ERROR):
      return {
        ...state,
        errors: {
          ...state.errors,
          editProductError: action.err
        }
      };
    case (FETCH_PRODUCT_ERROR):
      return {
        ...state,
        errors: {
          ...state.errors,
          fetchProductError: action.err
        }
      };
    case (DELETE_PRODUCT_ERROR):
      return {
        ...state,
        errors: {
          ...state.errors,
          deleteProductError: action.err
        }
      };
    default:
      return state
  }
};

export default productReducer