import {observer} from "mobx-react-lite";
import {useContext} from "react";
import * as B from "react-bootstrap";
import {Context} from "../index";
const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <B.ListGroup>
            <B.ListGroup.Item
                style={{cursor: "pointer"}}
                onClick={() => device.setSelectedType({})}
                active={!device.selectedType.id}
            >
                All
            </B.ListGroup.Item>
            {device.types.map(type => (
                <B.ListGroup.Item
                    style={{cursor: "pointer"}}
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                    active={type.id === device.selectedType.id}
                >
                    {type.name}
                </B.ListGroup.Item>
            ))}
        </B.ListGroup>
    );
});

export default TypeBar;
