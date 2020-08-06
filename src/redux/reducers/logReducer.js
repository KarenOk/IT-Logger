import {
	GET_LOGS,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	SEARCH_LOGS,
	SET_CURRENT,
	SET_LOGS_LOADING,
	SET_LOGS_ERROR,
	CLEAR_CURRENT
} from "../types/logTypes";

const initialState = {
	logs: null,
	loading: false,
	current: null,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_LOGS:
		case SEARCH_LOGS:
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
		case UPDATE_LOG:
			return {
				...state,
				logs: state.logs.map(log => (action.payload.id === log.id ? action.payload : log))
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
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
