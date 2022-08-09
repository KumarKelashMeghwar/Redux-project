import { combineReducers } from "redux";
import { selectReducer, cartReducer } from "./reducer";

const rootReducer = combineReducers({
  selectReducer,
  cartReducer,
});

export default rootReducer;
