import React from "react";
import styled from "styled-components";
import Message from "./Message";


interface IMessageBodyProps {
    messages: {you: boolean, message: string}[]
    recipient: string
}

const Wrapper = styled.div`
  padding: 25px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const MessageFromYou = styled.div`
  align-self: flex-end;
`

const MessageFromRecipient = styled.div`
  align-self: flex-start;
`





const MessageBody: React.FC<IMessageBodyProps> = (props: IMessageBodyProps) => {

    const renderMessages = () => {
        return props.messages.map(message => {
            if (message.you) {
                return (
                    <MessageFromYou>
                       <Message title={"You:"} message={message.message}/>
                    </MessageFromYou>
                )
            } else {
                return (
                    <MessageFromRecipient>
                        <Message title={props.recipient + ":"} message={message.message}/>
                    </MessageFromRecipient>
                )
            }

        })
    }

    return (
        <Wrapper>
            {renderMessages()}
        </Wrapper>
    )
}

export default MessageBody;