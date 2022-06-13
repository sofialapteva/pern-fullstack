import React, {useState, useContext, useEffect, useCallback, useMemo} from "react";
import * as B from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";

function Shop() {
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
}

export default Shop;
