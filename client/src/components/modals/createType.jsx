import {useState} from "react";
import * as B from "react-bootstrap";
import {createType} from "../../http/deviceAPI";
const CreateType = ({show, onHide}) => {
    const [type, setType] = useState("");
    const addType = () => {
        createType({name: type}).then(() => {
            setType("");
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
                <B.Modal.Title id="contained-modal-title-vcenter">Add new type</B.Modal.Title>
            </B.Modal.Header>
            <B.Modal.Body>
                <B.Form>
                    <B.Form.Control
                        value={type}
                        placeholder="Type the name of the type"
                        onChange={e => setType(e.target.value)}
                        autoFocus
                    />
                </B.Form>
            </B.Modal.Body>
            <B.Modal.Footer>
                <B.Button variant="outline-danger" onClick={onHide}>
                    Close
                </B.Button>
                <B.Button variant="outline-primary" onClick={addType}>
                    Add type
                </B.Button>
            </B.Modal.Footer>
        </B.Modal>
    );
};

export default CreateType;
