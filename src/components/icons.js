import React from "react";
import {joinClassNames} from "../services/className";

export const FaReact = ({className = "", ...props}) =>
    <i {...props} className={joinClassNames("fab fa-react", className)}/>;