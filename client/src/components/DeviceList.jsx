import React, {useState, useContext, useEffect, useCallback, useMemo} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import * as B from "react-bootstrap";
import DeviceItem from "./DeviceItem";
const DeviceList = observer(() => {
    const {device} = useContext(Context);
    return (
        <B.Row className="d-flex">
            {device.devices.map(dev => (
                <DeviceItem
                    key={dev.id}
                    onClick={() => device.setSelectedDevice(dev)}
                    active={dev.id === device.selectedDevice.id}
                    device={dev}
                />
            ))}
        </B.Row>
    );
});

export default DeviceList;
