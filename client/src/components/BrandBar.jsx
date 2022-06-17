import {observer} from "mobx-react-lite";
import {useContext} from "react";
import * as B from "react-bootstrap";
import {Context} from "../index";
const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <B.Row className="d-flex">
            <B.Card
                style={{cursor: "pointer", width: "fit-content"}}
                className={"p-3"}
                onClick={() => device.setSelectedBrand({})}
                border={device.selectedBrand.id ? "white" : "primary"}
            >
                All
            </B.Card>
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
