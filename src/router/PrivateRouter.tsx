import React, {useEffect} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import MessagePage from "../page/MessagePage";
import ContactsPage from "../page/ContactsPage";
import socketIOClient from "socket.io-client";
import AddFriendsPage from "../page/AddFriendsPage";
import {SocketContainer} from "../context/SocketContext";
import {AccountTokenContainer} from "../context/AccountContext";


const PrivateRouter = () => {

    const socketContainer = SocketContainer.useContainer()
    const tokenContainer = AccountTokenContainer.useContainer()

    useEffect(() => {
        console.log(process.env.REACT_APP_API_BASE_URL)
        const socket = socketIOClient(process.env.REACT_APP_API_BASE_URL!!)
        socket.emit("user", tokenContainer.accountToken)
        socketContainer.setSocket(socket)
    }, [])


    return (

            <Router>
                <Switch>
                    <Route path={"/contacts/:name"}>
                        <MessagePage/>
                    </Route>
                    <Route path={"/contacts"}>
                        <ContactsPage/>
                    </Route>
                    <Route path={"/add-friends"}>
                        <AddFriendsPage/>
                    </Route>
                    <Route>
                        <Redirect to={"/contacts"}/>
                    </Route>
                </Switch>
            </Router>
    )
}


export default PrivateRouter;