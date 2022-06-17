import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import * as B from "react-bootstrap";
import {Context} from "..";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
import TypeBar from "../components/TypeBar";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";

const Shop = observer(() => {
    const {device} = useContext(Context);
    useEffect(() => {
        fetchTypes().then(types => {
            device.setTypes(types);
        });
        fetchBrands().then(brands => {
            device.setBrands(brands);
        });
    }, []);
    useEffect(() => {
        fetchDevices(
            device.selectedType.id,
            device.selectedBrand.id,
            device.selectedPage,
            device.limit
        ).then(data => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        });
    }, [device.selectedPage, device.selectedBrand, device.selectedType]);
    return (
        <B.Container>
            <B.Row className="mt-3">
                <B.Col md={3}>
                    <TypeBar />
                </B.Col>
                <B.Col md={9} className="d-flex align-items-center flex-column">
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </B.Col>
            </B.Row>
        </B.Container>
    );
});

export default Shop;
