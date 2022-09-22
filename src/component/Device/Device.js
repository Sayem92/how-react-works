import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    return (
        <div>
            <h1>I have: {props.name}</h1>
            <DeviceDetail price={props.price}></DeviceDetail>
        </div>
    );
};

export default Device;