import { combineReducers } from "redux";
import logReducer from "./logReducer";
import technicianReducer from "./technicianReducer";

export default combineReducers({
	log: logReducer,
	technician: technicianReducer
});
