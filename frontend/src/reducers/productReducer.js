import {
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
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
    addProductError: false,
    editProductError: false,
    deleteProductError: false,
    fetchProductError: false
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case (GET_ALL_PRODUCTS):
      return {
        ...state,
        products: action.products
      };
    case (ADD_PRODUCT):
      return {
        ...state,
        products: [...state.products, action.product]
      };
    case(UPDATE_PRODUCT):
      return {
        ...state,
        products: state.products.map(product => {
          if (product._id === action.product._id) return action.product;
          else return product
        })
      };
    case (DELETE_PRODUCT):
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.id)
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
          addProductError: action.err
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
    case (DELETE_PRODUCT_ERROR):
      return {
        ...state,
        errors: {
          ...state.errors,
          deleteProductError: action.err
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
    default:
      return state
  }
};

export default productReducer