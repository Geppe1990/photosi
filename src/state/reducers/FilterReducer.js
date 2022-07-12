export const filterReducer = (state = "", action) => {
	switch (action.type) {
		case "FILTER_NAME":
			return { ...state, name: action.payload };
		case "FILTER_CATEGORY":
			return { ...state, category: action.payload };
		case "FILTER_COLOR":
			return { ...state, color: action.payload };
		case "FILTER_SIZE":
			return { ...state, size: action.payload };
		default:
			return state;
	}
};