import {CHANGE_CATEGORY_NAME, CHANGE_PARENT_ID, CREATE_CATEGORY_ERROR} from "../actions/categoryActions";

const initialState = {
  categoryName: "",
  parentId: "",
  createCategoryError: false
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case (CHANGE_CATEGORY_NAME):
      return {
        ...state,
        categoryName: action.categoryName
      };
    case(CHANGE_PARENT_ID):
      return {
        ...state,
        parentId: action.parentId
      };
    case(CREATE_CATEGORY_ERROR):
      return {
        ...state,
        createCategoryError: action.createCategoryError
      };
    default:
      return state
  }
};

export default categoryReducer