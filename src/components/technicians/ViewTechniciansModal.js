import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TechnicianItem from "./TechnicianItem";
import { getTechnicians } from "../../redux/actions/technicianActions";

function ViewTechniciansModal({ technician: { technicians, loading }, getTechnicians }) {
	useEffect(() => {
		getTechnicians();
	}, []);

	return (
		<div id="view-technicians-modal" className="modal">
			<div className="modal-content">
				{loading ? (
					<p> Fetching technicians ... </p>
				) : (
					<>
						<ul className="collection with-header">
							<li className="collection-header">
								<h4 className="center">Technicians </h4>
							</li>
							{!technicians || !technicians.length ? (
								<p className="center"> No technicians found. </p>
							) : (
								technicians.map(technician => (
									<TechnicianItem key={technician.id} technician={technician} />
								))
							)}
						</ul>
					</>
				)}
			</div>
		</div>
	);
}

ViewTechniciansModal.propTypes = {
	technician: PropTypes.object.isRequired,
	getTechnicians: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	technician: state.technician
});

export default connect(mapStateToProps, { getTechnicians })(ViewTechniciansModal);
