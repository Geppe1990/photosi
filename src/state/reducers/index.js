import { combineReducers } from "redux";
import filterReducer from "./FilterReducer"

const reducers = combineReducers({
	filter: filterReducer
})

export default reducers