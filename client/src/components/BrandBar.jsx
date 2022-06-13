import React, {useState, useContext, useEffect, useCallback, useMemo} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import * as B from "react-bootstrap";
const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <B.Row className="d-flex">
            {device.brands.map(brand => (
                <B.Card
                    style={{cursor: "pointer", width: "fit-content"}}
                    className={"p-3"}
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "primary" : "white"}
                >
                    {brand.name}
                </B.Card>
            ))}
        </B.Row>
    );
});

export default BrandBar;
