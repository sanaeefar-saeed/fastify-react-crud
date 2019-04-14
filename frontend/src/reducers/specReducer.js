import {
  GET_SPECS,
  IS_FETCHING_SPEC,
  FETCH_SPEC_ERROR,
  DELETE_SPEC_ERROR,
  CREATE_SPEC_ERROR,
  EDIT_SPEC_ERROR
} from "../actions/specActions";

const initialState = {
  specs: [],
  isFetchingSpec: true,
  errors: {
    createSpecError: false,
    editSpecError: false,
    fetchSpecError: false,
    deleteProductError: false
  }
};

const specReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECS:
      return {
        ...state,
        specs: action.specs
      };
    case IS_FETCHING_SPEC:
      return {
        ...state,
        isFetchingSpec: action.bool
      };
    case FETCH_SPEC_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          fetchSpecError: action.fetchSpecError
        }
      };
    case DELETE_SPEC_ERROR:
      return {
        ...state,
        errors: {
          deleteSpecError: action.deleteSpecError
        }
      };
    case CREATE_SPEC_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          createSpecError: action.createSpecError
        }
      };
    case EDIT_SPEC_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          editSpecError: action.editSpecError
        }
      };
    default:
      return state;
  }
};

export default specReducer;
