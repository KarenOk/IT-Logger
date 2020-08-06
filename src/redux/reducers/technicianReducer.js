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
		case ADD_TECHNICIAN:
			return {
				...state,
				technicians: [...state.technicians, action.payload]
			};
		case DELETE_TECHNICIAN:
			return {
				...state,
				technicians: state.technicians.filter(technician => technician.id !== action.payload)
			};
		case SET_TECHNICIANS_LOADING:
			return {
				...state,
				loading: action.payload
			};
		case SET_TECHNICIANS_ERROR:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
