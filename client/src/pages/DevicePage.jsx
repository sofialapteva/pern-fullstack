import {useEffect, useState} from "react";
import * as B from "react-bootstrap";
import {useParams} from "react-router-dom";
import bigStar from "../assets/bigstar.png";
import {fetchOneDevice} from "../http/deviceAPI";
function DevicePage() {
    const {id} = useParams();
    const [device, setDevice] = useState({info: []});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchOneDevice(id)
            .then(data => {
                setDevice(data);
            })
            .finally(() => setLoading(false));
    }, []);
    if (loading) return <B.Spinner animation="grow" />;
    return (
        <B.Container className="mt-3">
            <B.Row>
                <B.Col md={4}>
                    <B.Image
                        width={300}
                        height={300}
                        src={process.env.REACT_APP_API_URL + device.img}
                    />
                </B.Col>
                <B.Col md={4}>
                    <B.Row className="d-flex flex-column align-items-center justify-content-center">
                        <h2 style={{width: "fit-content"}}>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: "cover",
                                fontSize: 64,
                            }}
                        >
                            {device.rating}
                        </div>
                    </B.Row>
                </B.Col>
                <B.Col md={4}>
                    <B.Card
                        className="d-flex flex-column align-items-center justify-content-center"
                        border="white"
                        style={{height: 300, width: 300, fontSize: 32}}
                    >
                        <h3>{device.price}$</h3>
                        <B.Button variant="outline-primary">Add to cart</B.Button>
                    </B.Card>
                </B.Col>
            </B.Row>
            <B.Row className="d-flex m-3 flex-col">
                <h2>Description</h2>
                {device.info.map((desc, i) => (
                    <B.Row
                        key={desc.id}
                        style={{backgroundColor: i % 2 ? "lightgray" : "transparent", padding: 10}}
                    >
                        {desc?.title}:{desc?.description}
                    </B.Row>
                ))}
            </B.Row>
        </B.Container>
    );
}

export default DevicePage;
