import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import M from "materialize-css//dist/js/materialize.min.js";
import { addLog } from "../../redux/actions/logActions";

function AddLogModal({ addLog }) {
	const [message, setMessage] = useState("");
	const [technician, setTechnician] = useState("");
	const [attention, setAttention] = useState(false);

	const submit = () => {
		if (!message || !technician) M.toast({ html: "All fields are required. " });
		else {
			addLog({
				message,
				technician,
				attention,
				date: new Date()
			});
			M.toast({ html: `Log added by ${technician}.` });

			setMessage("");
			setTechnician("");
			setAttention(false);
		}
	};

	return (
		<div id="add-log-modal" className="modal">
			<div className="modal-content">
				<h4 style={{ marginBottom: "20px" }}> Enter System Log</h4>

				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="message"
							id="message"
							className="active"
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
						<label htmlFor="message"> Message</label>
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
							<option value="Samantha Jones"> Samantha Jones</option>
							<option value="Brady Saffire"> Brady Saffire</option>
							<option value="Sandra Otedola"> Sandra Otedola</option>
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
					SUBMIT
				</a>
			</div>
		</div>
	);
}

AddLogModal.propTypes = {
	addLog: PropTypes.func.isRequired
};

export default connect(null, { addLog })(AddLogModal);
