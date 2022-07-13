export const productReducer = (state = "", action) => {
	switch (action.type) {
		case "ADD_PRODUCT":
			return [ ...state, action.payload ];
		case "EDIT_PRODUCT":
			const index = state.findIndex(elm => elm.code === action.payload.code)
			const res = [...state];
			res[index] = action.payload

			return res;
		default:
			return state;
	}
};