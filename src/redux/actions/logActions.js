import { GET_LOGS, ADD_LOG, DELETE_LOG, SET_LOGS_LOADING, SET_LOGS_ERROR } from "../types/logTypes";

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

export const addLog = log => async dispatch => {
	setLoading();
	try {
		const res = await fetch("/logs", {
			method: "POST",
			body: JSON.stringify(log),
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await res.json();
		dispatch({
			type: ADD_LOG,
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

export const deleteLog = log_id => async dispatch => {
	setLoading();
	try {
		await fetch("/logs/" + log_id, {
			method: "DELETE"
		});
		dispatch({
			type: DELETE_LOG,
			payload: log_id
		});
	} catch (error) {}
	setLoading(false);
};

export const setLoading = (loading = true) => {
	return {
		type: SET_LOGS_LOADING,
		payload: loading
	};
};
