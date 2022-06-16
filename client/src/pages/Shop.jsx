import {observer} from "mobx-react-lite";
import React, {useState, useContext, useEffect, useCallback, useMemo} from "react";
import * as B from "react-bootstrap";
import {Context} from "..";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import {fetchTypes, fetchBrands, fetchDevices} from "../http/deviceAPI";

const Shop = observer(() => {
    const {device} = useContext(Context);
    useEffect(() => {
        fetchTypes().then(types => {
            device.setTypes(types);
        });
        fetchBrands().then(brands => {
            device.setBrands(brands);
        });
        fetchDevices().then(devices => {
            device.setDevices(devices.rows);
        });
    }, []);
    return (
        <B.Container>
            <B.Row className="mt-3">
                <B.Col md={3}>
                    <TypeBar />
                </B.Col>
                <B.Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </B.Col>
            </B.Row>
        </B.Container>
    );
});

export default Shop;
