import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
	filter: filterReducer,
	products: productReducer
})

export default reducers