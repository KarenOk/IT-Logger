import React from 'react';
import PropTypes from 'prop-types';

const TechnicianItem = ({ technician }) => {
    return (
        <li className="collection-item" >
            {technician.first_name} {technician.last_name}
        </li >
    );
};

TechnicianItem.propTypes = {
    technician: PropTypes.object.isRequired,
};


export default TechnicianItem;
