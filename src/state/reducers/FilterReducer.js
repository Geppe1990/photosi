const filterReducer = (state = "", action) => {
	return !action.payload ? state : action.payload;
};

export default filterReducer;