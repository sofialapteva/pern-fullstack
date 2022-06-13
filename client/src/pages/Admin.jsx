import React, {useState, useContext, useEffect, useCallback, useMemo} from "react";
import * as B from "react-bootstrap";
import {CreateBrand, CreateDevice, CreateType} from "../components/modals";
function Admin() {
    const [addBrand, setAddBrand] = useState(false);
    const [addType, setAddType] = useState(false);
    const [addDevice, setAddDevice] = useState(false);
    return (
        <B.Container className="d-flex flex-column">
            <B.Button
                variant="outline-primary"
                className="mt-4 p-2"
                onClick={() => setAddType(true)}
            >
                Add type
            </B.Button>
            <B.Button
                variant="outline-primary"
                className="mt-4 p-2"
                onClick={() => setAddBrand(true)}
            >
                Add brand
            </B.Button>
            <B.Button
                variant="outline-primary"
                className="mt-4 p-2"
                onClick={() => setAddDevice(true)}
            >
                Add device
            </B.Button>
            <CreateBrand show={addBrand} onHide={() => setAddBrand(false)} />
            <CreateType show={addType} onHide={() => setAddType(false)} />
            <CreateDevice show={addDevice} onHide={() => setAddDevice(false)} />
        </B.Container>
    );
}

export default Admin;
