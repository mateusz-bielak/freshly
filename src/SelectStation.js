import React from 'react';
import { Icon, Select } from 'antd';

const Option = Select.Option;

const filterOption = (input, option) =>
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

export const SelectStation = ({ fetchStationIndex, stations }) => (
    <Select
        clearIcon={<Icon style={{ backgroundColor: '#ecf0f1' }} type="delete" />}
        allowClear
        filterOption={filterOption}
        onSelect={fetchStationIndex}
        optionFilterProp="children"
        placeholder="Select a station"
        showSearch
        style={{ border: 'none', width: '100%' }}
    >
        {stations.map(({ id, stationName }) => (
            <Option key={id} value={id}>
                {stationName}
            </Option>
        ))}
    </Select>
);
