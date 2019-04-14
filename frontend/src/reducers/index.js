import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import specReducer from "./specReducer";

export default combineReducers({
  categoryReducer,
  productReducer,
  specReducer
});
