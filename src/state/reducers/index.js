import { combineReducers } from "redux";
import filterNameReducer from "./FilterNameReducer"
import filterCategoryReducer from "./FilterCategoryReducer";

const reducers = combineReducers({
	filterName: filterNameReducer,
	filterCategory: filterCategoryReducer
})

export default reducers