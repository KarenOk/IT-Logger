import {
	GET_TECHNICIANS,
	DELETE_TECHNICIAN,
	ADD_TECHNICIAN,
	SET_TECHNICIANS_ERROR,
	SET_TECHNICIANS_LOADING
} from "../types/technicianTypes";

// get technicians
export const getTechnicians = () => async dispatch => {
	dispatch(setLoading(true));
	try {
		const res = await fetch("/technicians");
		const data = await res.json();

		dispatch({
			type: GET_TECHNICIANS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: SET_TECHNICIANS_ERROR,
			payload: error
		});
	}
	dispatch(setLoading(false));
};

export const addTechnician = technician => async dispatch => {
	dispatch(setLoading(true));

	try {
		const res = await fetch("/technicians", {
			method: "POST",
			body: JSON.stringify(technician),
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await res.json();
		dispatch({
			type: ADD_TECHNICIAN,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: SET_TECHNICIANS_ERROR,
			payload: error
		});
	}
	dispatch(setLoading(false));
};

// delete technician
export const deleteTechnician = id => async dispatch => {
	dispatch(setLoading(true));

	try {
		await fetch("/technicians/" + id, {
			method: "DELETE"
		});
		dispatch({
			type: DELETE_TECHNICIAN,
			payload: id
		});
	} catch (error) {
		dispatch({
			type: SET_TECHNICIANS_ERROR,
			payload: error
		});
	}
	dispatch(setLoading(false));
};

// set loading
export const setLoading = (loading = true) => {
	return {
		type: SET_TECHNICIANS_LOADING,
		payload: loading
	};
};
