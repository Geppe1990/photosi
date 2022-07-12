export const filterNewName = (name) => ((dispatch) => {
	dispatch({ type: "FILTER_NAME", payload: name })
})

export const filterNewCategory = (category) => ((dispatch) => {
	dispatch({ type: "FILTER_CATEGORY", payload: category })
})

export const filterNewColor = (color) => ((dispatch) => {
	dispatch({ type: "FILTER_COLOR", payload: color })
})


export const filterNewSize = (size) => ((dispatch) => {
	dispatch({ type: "FILTER_SIZE", payload: size })
})
