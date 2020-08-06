import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../redux/actions/logActions";

function Logs({ log: { logs, loading }, getLogs }) {
	useEffect(() => {
		getLogs();
	}, []);

	if (loading || !logs) return <Preloader />;

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">IT Support Logs</h4>
			</li>
			{!logs.length ? (
				<p className="center"> No logs found. </p>
			) : (
				logs.map(log => <LogItem key={log.id} log={log} />)
			)}
		</ul>
	);
}

Logs.propTypes = {
	log: PropTypes.object.isRequired,
	getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
