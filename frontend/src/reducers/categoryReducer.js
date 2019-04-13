import {
  GET_CATEGORIES,
  IS_FETCHING_CATEGORY,
  FETCH_CATEGORY_ERROR,
  DELETE_CATEGORY_ERROR,
  CREATE_CATEGORY_ERROR,
  EDIT_CATEGORY_ERROR,
} from "../actions/categoryActions"

const initialState = {
  categories: [],
  isFetchingCategory: true,
  errors: {
    createCategoryError: false,
    editCategoryError: false,
    fetchCategoryError: false,
    deleteProductError: false
  }
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    case IS_FETCHING_CATEGORY:
      return {
        ...state,
        isFetchingCategory: action.bool
      };
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          fetchCategoryError: action.fetchCategoryError
        }
      };
    case DELETE_CATEGORY_ERROR:
      return {
        ...state,
        errors: {
          deleteCategoryError: action.deleteCategoryError
        }
      };
    case CREATE_CATEGORY_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          createCategoryError: action.createCategoryError
        }
      };
    case EDIT_CATEGORY_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          editCategoryError: action.editCategoryError
        }
      };
    default:
      return state
  }
};

export default categoryReducer
