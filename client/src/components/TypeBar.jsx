import React, {useState, useContext, useEffect, useCallback, useMemo} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import * as B from "react-bootstrap";
const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <B.ListGroup>
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
