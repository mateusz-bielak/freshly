import React from 'react';
import { Card } from 'antd';
import { SelectStation } from './SelectStation';

export const StatsCard = ({ fetchStationIndex, stations, stationIndex }) => {
    const station = stationIndex && stations.find(({ id }) => id === stationIndex.id);
    console.log(stationIndex);

    return (
        <Card
            title={<SelectStation stations={stations} fetchStationIndex={fetchStationIndex} />}
            style={{ width: 300 }}
        >
            {stationIndex ? (
                <p>Stan powietrza: {stationIndex.stIndexLevel.indexLevelName} </p>
            ) : (
                <p>Jakie mamy dzisiaj powietrze?</p>
            )}
        </Card>
    );
};
