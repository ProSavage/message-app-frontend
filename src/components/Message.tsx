import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin: 10px;
 `

const Title = styled.p`
  font-size: 12px;
  color: gray;
`

const MessageWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: lightblue;
`

interface IMessageProps {
    title: string,
    message: string
}

const Message: React.FC<IMessageProps> = (props: IMessageProps) => {


    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <MessageWrapper>
                <p>{props.message}</p>
            </MessageWrapper>
        </Wrapper>
    )
}

export default Message;