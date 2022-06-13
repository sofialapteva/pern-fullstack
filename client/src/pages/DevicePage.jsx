import React, {useState, useContext, useEffect, useCallback, useMemo} from "react";
import * as B from "react-bootstrap";
import bigStar from "../assets/bigstar.png";
function DevicePage() {
    const device = {
        id: 2,
        name: "IPhone10",
        price: 20000,
        rating: 5,
        img: "https://cdn.multitronic.fi/images/prod/6/0/MLPK3KG-A-1.jpg",
    };
    const description = [
        {id: 1, title: "Memory", description: "5 Gb"},
        {id: 2, title: "Memory", description: "5 Gb"},
        {id: 3, title: "Memory", description: "5 Gb"},
        {id: 4, title: "Memory", description: "5 Gb"},
        {id: 5, title: "Memory", description: "5 Gb"},
        {id: 6, title: "Memory", description: "5 Gb"},
    ];
    return (
        <B.Container className="mt-3">
            <B.Row>
                <B.Col md={4}>
                    <B.Image width={300} height={300} src={device.img} />
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
                {description.map((desc, i) => (
                    <B.Row
                        key={desc.id}
                        style={{backgroundColor: i % 2 ? "lightgray" : "transparent", padding: 10}}
                    >
                        {desc.title}:{desc.description}
                    </B.Row>
                ))}
            </B.Row>
        </B.Container>
    );
}

export default DevicePage;
