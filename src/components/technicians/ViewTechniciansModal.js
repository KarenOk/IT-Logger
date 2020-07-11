import React, { useState, useEffect } from 'react';
import TechnicianItem from './TechnicianItem';

function ViewTechniciansModal() {
    const [technicians, setTechnicians] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechnicians();
    }, []);

    const getTechnicians = async () => {
        setLoading(true);
        const res = await fetch("/technicians");
        const data = await res.json();

        setTechnicians(data);
        setLoading(false);
    };

    return (
        <div id="view-technicians-modal" className="modal">
            <div className="modal-content">
                {loading ?
                    <p> Fetching technicians ... </p> :
                    <>
                        <ul className="collection with-header">
                            <li className="collection-header">
                                <h4 className="center">Technicians </h4>
                            </li>
                            {!technicians.length ?
                                <p className="center"> No technicians found. </p> :
                                technicians.map(technician =>
                                    <TechnicianItem key={technician.id} technician={technician} />)
                            }

                        </ul>
                    </>}
            </div>
        </div>
    );
}

export default ViewTechniciansModal;
