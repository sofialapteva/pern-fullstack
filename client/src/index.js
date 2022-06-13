import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
export const Context = createContext(null);
root.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            device: new DeviceStore(),
        }}
    >
        <App />
    </Context.Provider>
);
