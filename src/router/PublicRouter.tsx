import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "../page/LoginPage";
import SignupPage from "../page/SignupPage";


const PublicRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={"/signup"}>
                    <SignupPage/>
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