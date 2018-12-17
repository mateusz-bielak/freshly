import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState({ hits: [] });

    const fetchData = async () => {
        const result = await fetch(`http://localhost:4000/api/station/findAll`).then(res => res.json());

        setData({ hits: result });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul className="App">
            {/* {data.hits.map(item => (
                <li key={item.id}>
                    <p>{item.stationName}</p>
                </li>
            ))} */}
        </ul>
    );
}

export default App;
