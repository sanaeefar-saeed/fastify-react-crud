const GET_PRODUCTS = "GET_PRODUCTS";
const IS_FETCHING_PRODUCT = "IS_FETCHING_PRODUCT";
const CHANGE_PRODUCT_NAME = "CHANGE_PRODUCT_NAME";
const CHANGE_PRODUCT_ID = "CHANGE_PRODUCT_ID";
const CHANGE_ID = "CHANGE_ID";
const CHANGE_CATEGORY_ID = "CHANGE_CATEGORY_ID";
const CHANGE_TITLE = "CHANGE_TITLE";
const CHANGE_COUNT = "CHANGE_COUNT";
const CHANGE_COND = "CHANGE_COND";
const CHANGE_PRICE = "CHANGE_PRICE";
const CHANGE_PARSE_DATE = "CHANGE_PARSE_DATE";
const CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION";
const CHANGE_CURIER = "CHANGE_CURIER";
const CHANGE_GUARANTEE = "CHANGE_GUARANTEE";
const CHANGE_URL = "CHANGE_URL";
const CHANGE_DT = "CHANGE_DT";
const CHANGE_MANAGER_ID = "CHANGE_MANAGER_ID";
const CHANGE_STATUS = "CHANGE_STATUS";
const CHANGE_CTYPE = "CHANGE_CTYPE";
const CHANGE_PRIME_CATEGORY = "CHANGE_PRIME_CATEGORY";
const CHANGE_STORE_ID = "CHANGE_STORE_ID";
const CHANGE_PRIME_CAT_NAME = "CHANGE_PRIME_CAT_NAME";
const CREATE_PRODUCT_ERROR = "CREATE_PRODUCT_ERROR";
const EDIT_PRODUCT_ERROR = "EDIT_PRODUCT_ERROR";
const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";
const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";

const getProducts = products => ({ type: GET_PRODUCTS, products });
const isFetchingProduct = bool => ({ type: IS_FETCHING_PRODUCT, bool });
const fetchProductError = fetchProductError => ({
  type: FETCH_PRODUCT_ERROR,
  fetchProductError
});
const deleteProductError = deleteProductError => ({
  type: DELETE_PRODUCT_ERROR,
  deleteProductError
});

const changeProductName = productName => ({
  type: CHANGE_PRODUCT_NAME,
  productName
});
const changeProductId = productId => ({ type: CHANGE_PRODUCT_ID, productId });
const changeId = id => ({ type: CHANGE_ID, id });
const changeCategoryId = categoryId => ({
  type: CHANGE_CATEGORY_ID,
  categoryId
});
const changeTitle = title => ({ type: CHANGE_TITLE, title });
const changeCount = count => ({ type: CHANGE_COUNT, count });
const changeCond = cond => ({ type: CHANGE_COND, cond });
const changePrice = price => ({ type: CHANGE_PRICE, price });
const changeParseDate = parseDate => ({ type: CHANGE_PARSE_DATE, parseDate });
const changeDescription = description => ({
  type: CHANGE_DESCRIPTION,
  description
});
const changeCurier = curier => ({ type: CHANGE_CURIER, curier });
const changeGuarantee = guarantee => ({ type: CHANGE_GUARANTEE, guarantee });
const changeUrl = url => ({ type: CHANGE_URL, url });
const changeDt = dt => ({ type: CHANGE_DT, dt });
const changeManagerId = managerId => ({ type: CHANGE_MANAGER_ID, managerId });
const changeStatus = status => ({ type: CHANGE_STATUS, status });
const changeCtype = ctype => ({ type: CHANGE_CTYPE, ctype });
const changePrimeCategory = primeCategory => ({
  type: CHANGE_PRIME_CATEGORY,
  primeCategory
});
const changeStoreId = storeId => ({ type: CHANGE_STORE_ID, storeId });
const changePrimeCatName = primeCatName => ({
  type: CHANGE_PRIME_CAT_NAME,
  primeCatName
});

const createProductError = createProductError => ({
  type: CREATE_PRODUCT_ERROR,
  createProductError
});
const editProductError = editProductError => ({
  type: EDIT_PRODUCT_ERROR,
  editProductError
});

export {
  GET_PRODUCTS,
  IS_FETCHING_PRODUCT,
  FETCH_PRODUCT_ERROR,
  DELETE_PRODUCT_ERROR,
  CREATE_PRODUCT_ERROR,
  CHANGE_PRODUCT_ID,
  CHANGE_PRODUCT_NAME,
  CHANGE_ID,
  CHANGE_CATEGORY_ID,
  CHANGE_TITLE,
  CHANGE_COUNT,
  CHANGE_COND,
  CHANGE_PRICE,
  CHANGE_PARSE_DATE,
  CHANGE_DESCRIPTION,
  CHANGE_CURIER,
  CHANGE_GUARANTEE,
  CHANGE_URL,
  CHANGE_DT,
  CHANGE_MANAGER_ID,
  CHANGE_STATUS,
  CHANGE_CTYPE,
  CHANGE_PRIME_CATEGORY,
  CHANGE_STORE_ID,
  CHANGE_PRIME_CAT_NAME,
  EDIT_PRODUCT_ERROR,
  getProducts,
  isFetchingProduct,
  fetchProductError,
  deleteProductError,
  changeProductId,
  changeProductName,
  changeId,
  changeCategoryId,
  changeTitle,
  changeCount,
  changeCond,
  changePrice,
  changeParseDate,
  changeDescription,
  changeCurier,
  changeGuarantee,
  changeUrl,
  changeDt,
  changeManagerId,
  changeStatus,
  changeCtype,
  changePrimeCategory,
  changeStoreId,
  changePrimeCatName,
  createProductError,
  editProductError
};
