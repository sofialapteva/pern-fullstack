import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import * as B from "react-bootstrap";
import {Context} from "../..";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
const CreateDevice = observer(({show, onHide}) => {
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
    const {device} = useContext(Context);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState([]);
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo(info.concat([{title: "", description: "", id: Date.now()}]));
    };
    const changeInfo = (key, value, id) => {
        setInfo(info.map(inf => (inf.id === id ? {...inf, [key]: value} : inf)));
    };
    const addDevice = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", `${price}`);
        formData.append("img", file);
        formData.append("info", JSON.stringify(info));
        formData.append("brandId", device.selectedBrand.id);
        formData.append("typeId", device.selectedType.id);
        createDevice(formData).then(() => onHide());
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
                        <B.Dropdown.Toggle>
                            {device.selectedType.name || "Choose type"}
                        </B.Dropdown.Toggle>
                        <B.Dropdown.Menu>
                            {device.types.map(type => (
                                <B.Dropdown.Item
                                    key={type.id}
                                    onClick={() => device.setSelectedType(type)}
                                >
                                    {type.name}
                                </B.Dropdown.Item>
                            ))}
                        </B.Dropdown.Menu>
                    </B.Dropdown>
                    <B.Dropdown>
                        <B.Dropdown.Toggle>
                            {device.selectedBrand.name || "Choose brand"}
                        </B.Dropdown.Toggle>
                        <B.Dropdown.Menu>
                            {device.brands.map(brand => (
                                <B.Dropdown.Item
                                    key={brand.id}
                                    onClick={() => device.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </B.Dropdown.Item>
                            ))}
                        </B.Dropdown.Menu>
                    </B.Dropdown>
                    <B.Form.Control
                        placeholder="Type the name of the device"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <B.Form.Control
                        placeholder="Type the price of the device"
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <B.Form.Control type="file" onChange={e => setFile(e.target.files[0])} />
                    <hr />
                    <B.Button onClick={addInfo}>Add information about the device</B.Button>
                    {info.map(data => (
                        <B.Row key={data.id}>
                            <B.Col md={4}>
                                <B.Form.Control
                                    placeholder="Property title"
                                    value={data.title}
                                    onChange={e => changeInfo("title", e.target.value, data.id)}
                                />
                            </B.Col>
                            <B.Col md={4}>
                                <B.Form.Control
                                    placeholder="Property desciption"
                                    value={data.description}
                                    onChange={e =>
                                        changeInfo("description", e.target.value, data.id)
                                    }
                                />
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
                <B.Button variant="outline-primary" onClick={addDevice}>
                    Add device
                </B.Button>
            </B.Modal.Footer>
        </B.Modal>
    );
});

export default CreateDevice;
