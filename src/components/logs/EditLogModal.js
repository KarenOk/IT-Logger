import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css//dist/js/materialize.min.js";
import { updateLog } from "../../redux/actions/logActions";
import TechnicianOptions from "../technicians/TechnicianOptions";

function EditLogModal({ current, updateLog }) {
	const [message, setMessage] = useState("");
	const [technician, setTechnician] = useState("");
	const [attention, setAttention] = useState(false);

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setTechnician(current.technician);
			setAttention(current.attention);
		}
	}, [current]);

	const submit = () => {
		if (!message || !technician) M.toast({ html: "All fields are required. " });
		updateLog({
			id: current.id,
			message,
			technician,
			attention,
			date: new Date()
		});
		setMessage("");
		setTechnician("");
		setAttention(false);
	};

	return (
		<div id="edit-log-modal" className="modal">
			<div className="modal-content">
				<h4 style={{ marginBottom: "20px" }}> Edit System Log</h4>

				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="message"
							id="message"
							className="active"
							placeholder="Message"
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<select
							id="technician"
							name="technician"
							className="browser-default"
							value={technician}
							onChange={e => setTechnician(e.target.value)}
						>
							<option value="" disabled>
								{" "}
								-- Choose a technician --
							</option>
							<TechnicianOptions />
						</select>
					</div>
				</div>

				<div className="row">
					<label>
						<input
							type="checkbox"
							name="attention"
							checked={attention}
							onChange={() => setAttention(!attention)}
						/>
						<span> Attention needed ? </span>
					</label>
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

EditLogModal.propTypes = {
	current: PropTypes.object.isRequired,
	updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
