import React from 'react';
import { Select } from 'antd';

import './App.css';

const Option = Select.Option;

const filterOption = (input, option) =>
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

export const SelectStation = ({ fetchStationIndex, stations }) => (
    <Select
        allowClear
        filterOption={filterOption}
        onSelect={fetchStationIndex}
        optionFilterProp="children"
        placeholder="Select a station"
        showSearch
        style={{ width: '100%' }}
    >
        {stations.map(({ id, stationName }) => (
            <Option key={id} value={id}>
                {stationName}
            </Option>
        ))}
    </Select>
);
