import React from 'react';
import { Select } from 'antd';

import './App.css';

const Option = Select.Option;

const handleChange = value => {
    console.log(`selected ${value}`);
};

const handleBlur = () => {
    console.log('blur');
};

const handleFocus = () => {
    console.log('focus');
};

const filterOption = (input, option) =>
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

export const SelectStation = ({ stations }) => (
    <Select
        allowClear
        filterOption={filterOption}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        optionFilterProp="children"
        placeholder="Select a person"
        showSearch
        style={{ width: 200 }}
    >
        {stations.map(({ id, stationName }) => (
            <Option key={id} value={id}>
                {stationName}
            </Option>
        ))}
    </Select>
);
