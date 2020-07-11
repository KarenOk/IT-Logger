import React from 'react';

function AddButton() {
    return (
        <div className="fixed-action-btn">
            <a href="#add-log-modal" className="btn-floating btn-large teal darken-3 modal-trigger">
                <i className="material-icons large">add</i>
            </a>
            <ul>
                <li>
                    <a href="#view-technicians-modal" className="btn-floating blue lighten-2 modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="#add-technician-modal" className="btn-floating orange modal-trigger">
                        <i className="material-icons">person_add</i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default AddButton;
