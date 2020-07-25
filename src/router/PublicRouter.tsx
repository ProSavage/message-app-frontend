import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "../page/LoginPage";


const PublicRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={"/signup"}>
                    <p>Sign up</p>
                </Route>
                <Route exact path={"/login"}>
                    <LoginPage/>
                </Route>
                <Route>
                    <Redirect to={"/login"}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default PublicRouter;