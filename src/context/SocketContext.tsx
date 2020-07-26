import {useState} from "react";
import {createContainer} from "unstated-next";


export const useSocket = () => {
    const [socket, setSocket] = useState()
    return {socket, setSocket}
}

export const SocketContainer  = createContainer(useSocket)