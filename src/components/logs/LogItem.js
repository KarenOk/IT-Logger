import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog } from "../../redux/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";
const LogItem = ({ log, deleteLog }) => {
	const onDelete = () => {
		deleteLog(log.id);
		M.toast({ html: "Log deleted." });
	};

	return (
		<li className="collection-item">
			<div>
				<a
					href="#edit-log-modal"
					className={`modal-trigger ${log.attention ? "red-text text-darken-2" : "teal-text"}`}
				>
					{log.message}
				</a>
				<br />
				<div className="grey-text">
					<span className="black-text"> ID #{log.id} </span> last updated by{" "}
					<span className="black-text">{log.technician}</span> on{" "}
					<Moment format="dddd, MMMM Do YYYY, hh:mm:ss a">{log.date}</Moment>
					<a href="#!s" onClick={onDelete} className="secondary-content">
						<i className="material-icons red-text">delete</i>
					</a>
				</div>
			</div>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired
};

export default connect(null, { deleteLog })(LogItem);
