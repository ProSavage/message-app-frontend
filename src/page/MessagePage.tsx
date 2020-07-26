import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import MessageBody from "../components/MessageBody";
import {SocketContainer} from "../context/SocketContext";
import {AccountTokenContainer} from "../context/AccountContext";
import Input from "../components/Input";

const Wrapper = styled.div`
  height: 100vh;
`

const MessageWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  justify-content: space-evenly;
  width: 100vw;
  background: white;
`
const MessageInput = styled.input`
  border-radius: 5px;
  flex-grow: 1;
`
const SendButton = styled.button`
  margin: 0 5px;
  background: lightblue;
  color: black;
  border: lightblue;
  padding: 10px;
  border-radius: 5px;
`
const Container = styled.div`
  display: flex;
  width: 100%;
`


interface IMessagePageParams {
    name: string
}

const MessagePage: React.FC = () => {
    const params = useParams<IMessagePageParams>()

    const socketContainer = SocketContainer.useContainer()
    const accountTokenContainer = AccountTokenContainer.useContainer()

    useEffect(() => {
        const socket = socketContainer.socket
        socket.on("messaged", (messageData: {from: string, message: string, flag: string}) => {
            console.log("Got a message!")
            if (messageData.from !== params.name) {
                console.log("Got message from", params.name, "but not on the right page to display.")
                return
            }
            setConversation(conversation.concat({
                you: false,
                message: messageData.message,
                flag: messageData.flag
            }))
        })
    })

    const [conversation, setConversation] = useState([] as {you: boolean, message: string, flag: string}[])
    const [message, setMessage] = useState("");

    return (
        <Wrapper>
            <Navbar status={params.name} showBack={true} showAddFriends={true}/>
            <MessageBody recipient={params.name} messages={conversation}/>
            <MessageWrapper>
                <Container>
                    <Input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
                    <SendButton onClick={(e) => {
                        e.preventDefault()
                        const socket = socketContainer.socket
                        setConversation(conversation.concat({
                            you: true,
                            message,
                            flag: ""
                        }))
                        socket.emit("message", {
                            senderToken: accountTokenContainer.accountToken,
                            recipient: params.name,
                            message
                        })
                        setMessage("")
                    }}>
                        Send
                    </SendButton>
                </Container>
            </MessageWrapper>
        </Wrapper>
    )
}

export default MessagePage;