const GET_CATEGORIES = 'GET_CATEGORIES';
const IS_FETCHING_CATEGORY = 'IS_FETCHING_CATEGORY';
const FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR';
const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR';
const CHANGE_CATEGORY_NAME = 'CHANGE_CATEGORY_NAME';
const CHANGE_PARENT_ID = 'CHANGE_PARENT_ID';
const CREATE_CATEGORY_ERROR = 'CREATE_CATEGORY_ERROR';
const EDIT_CATEGORY_ERROR = 'EDIT_CATEGORY_ERROR';

const getCategories = (categories) => ({type: GET_CATEGORIES, categories});
const isFetchingCategory = (bool) => ({type: IS_FETCHING_CATEGORY, bool});
const fetchCategoryError = (fetchCategoryError) => ({type: FETCH_CATEGORY_ERROR, fetchCategoryError});
const deleteCategoryError = (deleteCategoryError) => ({type: DELETE_CATEGORY_ERROR, deleteCategoryError});

const changeCategoryName = (categoryName) => ({type: CHANGE_CATEGORY_NAME, categoryName});
const changeParentId = (parentId) => ({type: CHANGE_PARENT_ID, parentId});
const createCategoryError = (createCategoryError) => ({type: CREATE_CATEGORY_ERROR, createCategoryError});
const editCategoryError = (editCategoryError) => ({type: EDIT_CATEGORY_ERROR, editCategoryError});

export {
  GET_CATEGORIES,
  IS_FETCHING_CATEGORY,
  FETCH_CATEGORY_ERROR,
  DELETE_CATEGORY_ERROR,
  CHANGE_PARENT_ID,
  CREATE_CATEGORY_ERROR,
  CHANGE_CATEGORY_NAME,
  EDIT_CATEGORY_ERROR,
  getCategories,
  isFetchingCategory,
  fetchCategoryError,
  deleteCategoryError,
  changeCategoryName,
  changeParentId,
  createCategoryError,
  editCategoryError
}