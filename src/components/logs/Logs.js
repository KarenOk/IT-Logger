import React, { useState, useEffect } from 'react';

function Logs() {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState([false]);

    useEffect(() => {
        getLogs();
    }, []);

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch("/logs");
        const data = await res.json();

        console.log(data);
        setLogs(data);
        setLoading(false);
    };

    if (loading) return <p> Fetching logs...</p>;

    return (
        <ul class="collection with-header">
            <li class="collection-header">
                <h4 className="center">IT Support Logs</h4>
            </li>
            {!logs.length ?
                <p className="center"> No logs found. </p> :
                logs.map(log => <li> {log.message} </li>)
            }

        </ul>
    );
}

export default Logs;
