import React from 'react';
import PropTypes from 'prop-types';

const TechnicianItem = ({ technician }) => {
    return (
        <li className="collection-item" >
            {technician.first_name} {technician.last_name}
            <a href="#!" className="secondary-content">
                <i className="material-icons red-text text-darken-2">delete</i>
            </a>
        </li >
    );
};

TechnicianItem.propTypes = {
    technician: PropTypes.object.isRequired,
};


export default TechnicianItem;
