const CHANGE_CATEGORY_NAME = 'CHANGE_CATEGORY_NAME';
const CHANGE_PARENT_ID = 'CHANGE_PARENT_ID';
const CREATE_CATEGORY_ERROR = 'CREATE_CATEGORY_ERROR';

const changeCategoryName = (categoryName) => ({type: CHANGE_CATEGORY_NAME, categoryName});
const changeParentId = (parentId) => ({type: CHANGE_PARENT_ID, parentId});
const createCategoryError = (createCategoryError) => ({type: CREATE_CATEGORY_ERROR, createCategoryError});

export {
  CHANGE_PARENT_ID,
  CREATE_CATEGORY_ERROR,
  CHANGE_CATEGORY_NAME,
  changeCategoryName,
  changeParentId,
  createCategoryError
}