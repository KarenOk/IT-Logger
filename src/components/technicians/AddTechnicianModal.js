import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTechnician } from "../../redux/actions/technicianActions";
import M from "materialize-css//dist/js/materialize.min.js";

function AddTechnicianModal({ addTechnician }) {
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");

	const submit = () => {
		if (!first_name || !last_name) M.toast({ html: "All fields are required. " });
		else {
			addTechnician({ first_name, last_name });
			M.toast({ html: `${first_name} ${last_name} was added as a technician.` });
			setFirstName("");
			setLastName("");
		}
	};

	return (
		<div id="add-technician-modal" className="modal">
			<div className="modal-content">
				<h4 style={{ marginBottom: "20px" }}> Add New Technician </h4>

				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="first_name"
							id="first_name"
							className="active"
							onChange={e => setFirstName(e.target.value)}
						/>
						<label htmlFor="first_name"> First Name</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="last_name"
							id="last_name"
							className="active"
							onChange={e => setLastName(e.target.value)}
						/>
						<label htmlFor="last_name"> Last Name</label>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a href="#!" className="modal-close btn teal darken-3 waves-effect waves-light" onClick={submit}>
					{" "}
					SUBMIT{" "}
				</a>
			</div>
		</div>
	);
}

AddTechnicianModal.propTypes = {
	addTechnician: PropTypes.func.isRequired
};

export default connect(null, { addTechnician })(AddTechnicianModal);
