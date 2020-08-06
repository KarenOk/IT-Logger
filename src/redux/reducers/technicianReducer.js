import {
	GET_TECHNICIANS,
	DELETE_TECHNICIAN,
	ADD_TECHNICIAN,
	SET_TECHNICIANS_ERROR,
	SET_TECHNICIANS_LOADING
} from "../types/technicianTypes";

const initialState = {
	technicians: null,
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TECHNICIANS:
			return {
				...state,
				technicians: action.payload
			};
		default:
			return state;
	}
};
