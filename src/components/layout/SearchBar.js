import React, { useRef } from "react";
import PropTypes from "prop-types";
import { searchLogs } from "../../redux/actions/logActions";
import { connect } from "react-redux";

function SearchBar({ searchLogs }) {
	const query = useRef("");
	return (
		<nav style={{ marginBottom: "30px" }} className="teal darken-3">
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input
							id="search"
							type="search"
							placeholder="Search logs..."
							ref={query}
							onChange={() => searchLogs(query.current.value)}
						/>
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	);
}

SearchBar.propTypes = {
	searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);
