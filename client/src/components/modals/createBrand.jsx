import {useState} from "react";
import * as B from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI";
const CreateBrand = ({show, onHide}) => {
    const [brand, setBrand] = useState("");
    const addBrand = () => {
        createBrand({name: brand}).then(() => {
            setBrand("");
            onHide();
        });
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
                <B.Modal.Title id="contained-modal-title-vcenter">Add new brand</B.Modal.Title>
            </B.Modal.Header>
            <B.Modal.Body>
                <B.Form>
                    <B.Form.Control
                        placeholder="Type the name of the brand"
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                        autoFocus
                    />
                </B.Form>
            </B.Modal.Body>
            <B.Modal.Footer>
                <B.Button variant="outline-danger" onClick={onHide}>
                    Close
                </B.Button>
                <B.Button variant="outline-primary" onClick={addBrand}>
                    Add brand
                </B.Button>
            </B.Modal.Footer>
        </B.Modal>
    );
};

export default CreateBrand;
