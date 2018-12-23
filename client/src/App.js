import React, { useState, useEffect } from 'react';

import { StatsCard } from './StatsCard';
import './App.css';

function App() {
    const [stations, setStations] = useState([]);
    const [stationIndex, setStationIndex] = useState();

    const fetchStations = async () => {
        const stations = await fetch('/api/station/findAll').then(res => res.json());
        setStations(stations);
    };

    const fetchStationIndex = async value => {
        const stationIndex = await fetch(`/api/aqindex/getIndex/${value}`).then(res => res.json());

        setStationIndex(stationIndex);
    };

    useEffect(() => {
        fetchStations();
    }, []);

    return (
        <StatsCard
            fetchStationIndex={fetchStationIndex}
            stations={stations}
            stationIndex={stationIndex}
        />
    );
}

export default App;
