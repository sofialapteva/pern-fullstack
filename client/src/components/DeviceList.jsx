import {observer} from "mobx-react-lite";
import {useContext} from "react";
import * as B from "react-bootstrap";
import {Context} from "../index";
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
                    dev={dev}
                />
            ))}
        </B.Row>
    );
});

export default DeviceList;
