import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Sample from "./pages/Sample";
import routes from "./routes";

export const Router = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Route exact path={routes.HomePage} component={Home}/>
                <Route exact path={routes.SamplePage} component={Sample}/>
            </Fragment>
        </BrowserRouter>
    );
};