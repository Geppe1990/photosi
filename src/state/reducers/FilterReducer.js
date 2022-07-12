const reducer = (state = "", action) => {
	return !action.payload ? state : action.payload;
};

export default reducer