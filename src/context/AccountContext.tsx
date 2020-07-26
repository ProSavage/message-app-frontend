import {useHistory} from "react-router-dom";
import {useState} from "react";
import {createContainer} from "unstated-next";


export const useAccountToken = () => {

    const history = useHistory()


    const [accountToken, setAccountToken] = useState()
    const [username, setUsername] = useState()

    const storeAccountToken = (token: string) => {
        setAccountToken(token)
        window.localStorage.setItem("TOKEN", token)
    }

    return {setAccountToken, storeAccountToken, accountToken, username, setUsername}
}

export const AccountTokenContainer = createContainer(useAccountToken)