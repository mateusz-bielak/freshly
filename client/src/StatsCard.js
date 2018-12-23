import React from 'react';
import { Card } from 'antd';
import { SelectStation } from './SelectStation';

export const StatsCard = ({ fetchStationIndex, stations, stationIndex }) => (
    <Card
        title={<SelectStation stations={stations} fetchStationIndex={fetchStationIndex} />}
        style={{ width: 300 }}
    >
        <span style={{ fontWeight: '600', color: '#fff' }}>
            {stationIndex
                ? `Stan powietrza: ${stationIndex.stIndexLevel.indexLevelName}`
                : 'Jakie mamy dziś powietrze?'}
        </span>
    </Card>
);
