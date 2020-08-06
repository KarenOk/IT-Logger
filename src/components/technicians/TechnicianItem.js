import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTechnician } from "../../redux/actions/technicianActions";

const TechnicianItem = ({ technician, deleteTechnician }) => {
	return (
		<li className="collection-item">
			{technician.first_name} {technician.last_name}
			<a href="#!" onClick={() => deleteTechnician(technician.id)} className="secondary-content">
				<i className="material-icons red-text text-darken-2">delete</i>
			</a>
		</li>
	);
};

TechnicianItem.propTypes = {
	technician: PropTypes.object.isRequired,
	deleteTechnician: PropTypes.func.isRequired
};

export default connect(null, { deleteTechnician })(TechnicianItem);
