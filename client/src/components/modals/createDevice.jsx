import {observer} from "mobx-react-lite";
import React, {useState, useContext, useEffect, useCallback, useMemo} from "react";
import * as B from "react-bootstrap";
import {Context} from "../..";
const createDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo(info.concat([{title: "", description: "", id: Date.now()}]));
    };
    return (
        <B.Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <B.Modal.Header closeButton>
                <B.Modal.Title id="contained-modal-title-vcenter">Add new device</B.Modal.Title>
            </B.Modal.Header>
            <B.Modal.Body>
                <B.Form className="d-flex flex-column gap-3">
                    <B.Dropdown>
                        <B.Dropdown.Toggle>Choose type</B.Dropdown.Toggle>
                        <B.Dropdown.Menu>
                            {device.types.map(type => (
                                <B.Dropdown.Item key={type.id}>{type.name}</B.Dropdown.Item>
                            ))}
                        </B.Dropdown.Menu>
                    </B.Dropdown>
                    <B.Dropdown>
                        <B.Dropdown.Toggle>Choose brand</B.Dropdown.Toggle>
                        <B.Dropdown.Menu>
                            {device.brands.map(brand => (
                                <B.Dropdown.Item key={brand.id}>{brand.name}</B.Dropdown.Item>
                            ))}
                        </B.Dropdown.Menu>
                    </B.Dropdown>
                    <B.Form.Control placeholder="Type the name of the device" />
                    <B.Form.Control placeholder="Type the price of the device" type="number" />
                    <B.Form.Control type="file" />
                    <hr />
                    <B.Button onClick={addInfo}>Add information about the device</B.Button>
                    {info.map(data => (
                        <B.Row key={data.id}>
                            <B.Col md={4}>
                                <B.Form.Control placeholder="Property title" />
                            </B.Col>
                            <B.Col md={4}>
                                <B.Form.Control placeholder="Property desciption" />
                            </B.Col>
                            <B.Col md={4}>
                                <B.Button
                                    onClick={() => setInfo(p => p.filter(e => e.id !== data.id))}
                                >
                                    Delete
                                </B.Button>
                            </B.Col>
                        </B.Row>
                    ))}
                </B.Form>
            </B.Modal.Body>
            <B.Modal.Footer>
                <B.Button variant="outline-danger" onClick={onHide}>
                    Close
                </B.Button>
                <B.Button variant="outline-primary" onClick={onHide}>
                    Add device
                </B.Button>
            </B.Modal.Footer>
        </B.Modal>
    );
});

export default createDevice;
