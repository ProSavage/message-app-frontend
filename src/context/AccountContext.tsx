import {useHistory} from "react-router-dom";
import {useState} from "react";
import {createContainer} from "unstated-next";


export const useAccountToken = () => {

    const history = useHistory()


    const [accountToken, setAccountToken] = useState()

    return {setAccountToken, accountToken}
}

export const AccountTokenContainer = createContainer(useAccountToken)