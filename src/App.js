import React, { useState, useEffect } from 'react';
import { cors } from './config';

function App() {
    const [data, setData] = useState({ hits: [] });

    const fetchData = async () => {
        const result = await fetch(`${cors}https://api.gios.gov.pl/pjp-api/rest/station/findAll`, {
            method: 'GET',
        }).then(res => res.json());

        console.log(result);

        setData({ hits: result });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul className="App">
            {data.hits.map(item => (
                <li key={item.id}>
                    <p>{item.stationName}</p>
                </li>
            ))}
        </ul>
    );
}

export default App;
