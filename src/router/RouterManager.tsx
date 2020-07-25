import React from "react";
import {AccountTokenContainer} from "../context/AccountContext";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";


const RouterManager = () => {
    const accountContainer = AccountTokenContainer.useContainer()

    const getRouter = () => {
        if (accountContainer.accountToken) {
            return <PrivateRouter/>
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