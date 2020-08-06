import { GET_LOGS, ADD_LOG, DELETE_LOG, SET_LOGS_LOADING, SET_LOGS_ERROR } from "../types/logTypes";

const initialState = {
	logs: null,
	loading: false,
	current: null,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_LOGS:
			return {
				...state,
				logs: action.payload
			};
		case ADD_LOG:
			return {
				...state,
				logs: [...state.logs, action.payload]
			};
		case DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter(log => log.id !== action.payload)
			};
		case SET_LOGS_LOADING:
			return {
				...state,
				loading: action.payload
			};
		case SET_LOGS_ERROR:
			if (action.payload) console.error(action.payload);
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
