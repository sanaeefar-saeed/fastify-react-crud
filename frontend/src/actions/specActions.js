const GET_SPECS = "GET_SPECS";
const IS_FETCHING_SPEC = "IS_FETCHING_SPEC";
const FETCH_SPEC_ERROR = "FETCH_SPEC_ERROR";
const DELETE_SPEC_ERROR = "DELETE_SPEC_ERROR";
const CREATE_SPEC_ERROR = "CREATE_SPEC_ERROR";
const EDIT_SPEC_ERROR = "EDIT_SPEC_ERROR";

const getSpecs = specs => ({ type: GET_SPECS, specs });
const isFetchingSpec = bool => ({ type: IS_FETCHING_SPEC, bool });
const fetchSpecError = fetchSpecError => ({
  type: FETCH_SPEC_ERROR,
  fetchSpecError
});
const deleteSpecError = deleteSpecError => ({
  type: DELETE_SPEC_ERROR,
  deleteSpecError
});
const createSpecError = createSpecError => ({
  type: CREATE_SPEC_ERROR,
  createSpecError
});
const editSpecError = editSpecError => ({
  type: EDIT_SPEC_ERROR,
  editSpecError
});

export {
  GET_SPECS,
  IS_FETCHING_SPEC,
  FETCH_SPEC_ERROR,
  DELETE_SPEC_ERROR,
  CREATE_SPEC_ERROR,
  EDIT_SPEC_ERROR,
  getSpecs,
  isFetchingSpec,
  fetchSpecError,
  deleteSpecError,
  createSpecError,
  editSpecError
};
