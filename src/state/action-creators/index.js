export const depositMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "deposit",
			payload: amount
		})
	}
}

export const withdrawMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "withdraw",
			payload: amount
		})
	}
}

/* 
	FILTRI 
*/

export const filterNewName = (name) => {
	return (dispatch) => {
		dispatch({
			type: "name",
			payload: name
		})
	}
}

export const filterNewCategory = (category) => {
	return (dispatch) => {
		dispatch({
			type: "category",
			payload: category
		})
	}
}

export const filterNewColor = (color) => {
	return (dispatch) => {
		dispatch({
			type: "color",
			payload: color
		})
	}
}


export const filterNewSize = (size) => {
	return (dispatch) => {
		dispatch({
			type: "size",
			payload: size
		})
	}
}
