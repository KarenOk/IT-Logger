import React from 'react';
import PropTypes from 'prop-types';
import Moment from "react-moment";

const LogItem = ({ log }) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-message-modal" className={`modal-trigger ${log.attention ? "red-text text-darken-2" : "teal-text"}`}>
                    {log.message}
                </a>
                <br />
                <div className="grey-text">
                    <span className="black-text"> ID #{log.id} </span> last updated by {" "}
                    <span className="black-text">{log.technician}</span> on {" "}
                    <Moment format="dddd, MMMM Do YYYY, hh:mm:ss a">{log.date}</Moment>
                    <a href="#!s" className="secondary-content">
                        <i className="material-icons red-text">delete</i>
                    </a>
                </div>

            </div>
        </li>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
};


export default LogItem;
