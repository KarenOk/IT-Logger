import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechnicians } from "../../redux/actions/technicianActions";

const TechnicianOptions = ({ technician: { technicians, loading }, getTechnicians }) => {
	useEffect(() => {
		getTechnicians();
	}, []);
	return (
		<>
			{!loading &&
				technicians &&
				technicians.map(t => (
					<option key={t.id} value={t.first_name + " " + t.last_name}>
						{t.first_name + " " + t.last_name}
					</option>
				))}
		</>
	);
};

TechnicianOptions.propTypes = {
	technician: PropTypes.object.isRequired,
	getTechnicians: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	technician: state.technician
});

export default connect(mapStateToProps, { getTechnicians })(TechnicianOptions);
