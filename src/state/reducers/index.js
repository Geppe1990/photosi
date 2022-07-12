import { combineReducers } from "redux";
import accountReducer from "./FilterReducer"

const reducers = combineReducers({
	account: accountReducer
})

export default reducers