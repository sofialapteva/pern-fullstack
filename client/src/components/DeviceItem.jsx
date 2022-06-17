import {observer} from "mobx-react-lite";
import {useContext} from "react";
import * as B from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Context} from "..";
import star from "../assets/star.png";
import {DEVICE_ROUTE} from "../utils/consts";
const DeviceItem = observer(({dev}) => {
    const navigate = useNavigate();
    const {device} = useContext(Context);
    return (
        <B.Col md={3} onClick={() => navigate(`${DEVICE_ROUTE}/${dev.id}`)}>
            <B.Card style={{width: 150, cursor: "pointer", margin: 10}} border="white">
                <B.Image width={150} height={150} src={process.env.REACT_APP_API_URL + dev.img} />
                <div className="d-flex justify-content-between align-items-center mt-2 text-black-50">
                    <div>{device.brands.find(br => br.id === dev.brandId).name}</div>
                    <div className="d-flex align-items-center gap-2">
                        <div>{dev.rating}</div>
                        <B.Image width={15} height={15} src={star} />
                    </div>
                </div>
                <div>{dev.name}</div>
            </B.Card>
        </B.Col>
    );
});

export default DeviceItem;
