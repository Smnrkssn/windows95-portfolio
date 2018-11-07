import React from "react";
import logo from "../resources/images/windows-icon.png";

console.log(logo);

export const Window95Menu = () => (
    <nav className="window-95-menu">
        <button className="start-button">
            <img src={logo} alt="windows logo"/>
            Start
        </button>
    </nav>
);