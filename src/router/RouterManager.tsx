import React, {useLayoutEffect} from "react";
import {AccountTokenContainer} from "../context/AccountContext";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import {SocketContainer} from "../context/SocketContext";


const RouterManager = () => {
    const accountContainer = AccountTokenContainer.useContainer()

    useLayoutEffect(() => {
        const storedToken = window.localStorage.getItem("TOKEN")
        if (!storedToken) return
        accountContainer.setAccountToken(storedToken)
    })


    const getRouter = () => {
        if (accountContainer.accountToken) {
            return <SocketContainer.Provider>
                <PrivateRouter/>
            </SocketContainer.Provider>
        }
        else {
            return <PublicRouter/>
        }
    }

    return (
        getRouter()
    )
}

export default RouterManager;