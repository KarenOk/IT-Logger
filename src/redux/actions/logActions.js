import { GET_LOGS, SET_LOGS_LOADING, SET_LOGS_ERROR } from "../types/logTypes";

export const getLogs = () => async dispatch => {
	setLoading();
	try {
		const res = await fetch("/logs");
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: SET_LOGS_ERROR,
			payload: error.response.data
		});
	}
	setLoading(false);
};

export const setLoading = (loading = true) => {
	return {
		type: SET_LOGS_LOADING,
		payload: loading
	};
};
