import {
	GET_LOGS,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT,
	SET_LOGS_LOADING,
	SET_LOGS_ERROR
} from "../types/logTypes";

export const getLogs = () => async dispatch => {
	dispatch(setLoading());
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
	dispatch(setLoading(false));
};

export const addLog = log => async dispatch => {
	dispatch(setLoading());
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
	dispatch(setLoading(false));
};

export const deleteLog = log_id => async dispatch => {
	dispatch(setLoading());
	try {
		await fetch("/logs/" + log_id, {
			method: "DELETE"
		});
		dispatch({
			type: DELETE_LOG,
			payload: log_id
		});
	} catch (error) {}
	dispatch(setLoading(false));
};

export const updateLog = log => async dispatch => {
	dispatch(setLoading());
	try {
		const res = await fetch("/logs/" + log.id, {
			method: "PUT",
			body: JSON.stringify(log),
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await res.json();

		dispatch({
			type: UPDATE_LOG,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: SET_LOGS_ERROR,
			payload: error.response.data
		});
	}
	dispatch(clearCurrent());
	dispatch(setLoading(false));
};

export const setCurrent = log => {
	return {
		type: SET_CURRENT,
		payload: log
	};
};

export const clearCurrent = () => {
	return { type: CLEAR_CURRENT };
};

export const setLoading = (loading = true) => {
	return {
		type: SET_LOGS_LOADING,
		payload: loading
	};
};
