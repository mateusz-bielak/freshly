import React, { useState, useEffect } from 'react';
import { SelectStation } from './SelectStation';

function App() {
    const [stations, setStations] = useState([]);
    const [stationIndex, setStationIndex] = useState({});

    const fetchStations = async () => {
        const stations = await fetch('http://localhost:4000/api/station/findAll').then(res =>
            res.json(),
        );
        setStations(stations);
    };

    const fetchStationIndex = async event => {
        const stationIndex = await fetch(
            `http://localhost:4000/api/aqindex/getIndex/${event.target.value}`,
        ).then(res => res.json());

        setStationIndex(stationIndex);
    };

    useEffect(() => {
        fetchStations();
    }, []);

    return (
        <>
            {/* <select id="stations" onChange={fetchStationIndex} defaultValue="pickStation">
                <option disabled value="pickStation">
                    Pick station
                </option>
                {stations.map(({ id, stationName }) => (
                    <option key={id} value={id}>
                        {stationName}
                    </option>
                ))}
            </select> */}
            <SelectStation stations={stations} />
            {/* {stationIndex.stIndexLevel && stationIndex.stIndexLevel.indexLevelName} */}
        </>
    );
}

export default App;
