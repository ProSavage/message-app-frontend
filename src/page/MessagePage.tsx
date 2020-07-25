import React, {useState} from "react";
import {useParams} from "react-router-dom";
import Navbar from "../components/Navbar";
import MessageBarForm from "../components/MessageBarForm";
import styled from "styled-components";
import MessageBody from "../components/MessageBody";

const Wrapper = styled.div`
  height: 100vh;
`


interface IMessagePageParams {
    name: string
}

const MessagePage: React.FC = () => {
    const params = useParams<IMessagePageParams>()

    const [messages, setMessages] = useState([
        {
            "you": false,
            "message": "yeet yeet yeah yeet yeah yeet yeah yeet yeah yeeeeeet"
        },
        {
            "you": true,
            "message": "yee2t"
        },
        {
            "you": false,
            "message": "ye2et"
        },
        {
            "you": true,
            "message": "y3eet"
        },
        {
            "you": true,
            "message": "y3eet"
        },
        {
            "you": true,
            "message": "y3eet"
        },
        {
            "you": true,
            "message": "y3eet"
        },
        {
            "you": true,
            "message": "y3eet"
        },
        {
            "you": true,
            "message": "y3eet"
        },{
            "you": true,
            "message": "y3eet"
        },{
            "you": true,
            "message": "y3eet"
        },{
            "you": true,
            "message": "y3eet"
        },{
            "you": true,
            "message": "y3eet"
        },
    ])

    return (
        <Wrapper>
            <Navbar status={params.name} showBack={true}/>

            <MessageBody recipient={params.name} messages={messages}/>

            <MessageBarForm/>
        </Wrapper>
    )
}

export default MessagePage;