import React, {useState, useContext, useEffect, useCallback, useMemo} from "react";
import * as B from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import star from "../assets/star.png";
import {DEVICE_ROUTE} from "../utils/consts";
const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <B.Col md={3} onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
            <B.Card style={{width: 150, cursor: "pointer", margin: 10}} border="white">
                <B.Image
                    width={150}
                    height={150}
                    src={process.env.REACT_APP_API_URL + device.img}
                />
                <div className="d-flex justify-content-between align-items-center mt-2 text-black-50">
                    <div>Samsung</div>
                    <div className="d-flex align-items-center gap-2">
                        <div>{device.rating}</div>
                        <B.Image width={15} height={15} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </B.Card>
        </B.Col>
    );
};

export default DeviceItem;
