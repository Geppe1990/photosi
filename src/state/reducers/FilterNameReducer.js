const filterNameReducer = (state = "", action) => {
	console.log(action)
	if(action.payload) {
		return action.payload;
	} else {
		return state;
	}
};

export default filterNameReducer;