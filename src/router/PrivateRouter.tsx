import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import MessagePage from "../page/MessagePage";
import ContactsPage from "../page/ContactsPage";


const PrivateRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/contacts/:name"}>
                    <MessagePage/>
                </Route>
                <Route path={"/contacts"}>
                    <ContactsPage/>
                </Route>
                <Route>
                    <Redirect to={"/contacts"}/>
                </Route>
            </Switch>
        </Router>
    )
}


export default PrivateRouter;