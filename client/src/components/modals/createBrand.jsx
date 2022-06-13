import React, {useState, useContext, useEffect, useCallback, useMemo} from "react";
import * as B from "react-bootstrap";
const createBrand = ({show, onHide}) => {
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
                    <B.Form.Control placeholder="Type the name of the brand" />
                </B.Form>
            </B.Modal.Body>
            <B.Modal.Footer>
                <B.Button variant="outline-danger" onClick={onHide}>
                    Close
                </B.Button>
                <B.Button variant="outline-primary" onClick={onHide}>
                    Add brand
                </B.Button>
            </B.Modal.Footer>
        </B.Modal>
    );
};

export default createBrand;
