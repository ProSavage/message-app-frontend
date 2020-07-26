import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin: 10px;
 `

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

const Title = styled.p`
  font-size: 12px;
  color: gray;
`

const Flag = styled.p`
  font-size: 10px;
  color: black;
`

const MessageWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: lightblue;
`

interface IMessageProps {
    title: string,
    message: string,
    flag: string
}

const Message: React.FC<IMessageProps> = (props: IMessageProps) => {


    return (
        <Wrapper>
            <TitleContainer>
                <Title>{props.title}</Title>
                <Flag>{props.flag}</Flag>
            </TitleContainer>
            <MessageWrapper>
                <p>{props.message}</p>
            </MessageWrapper>
        </Wrapper>
    )
}

export default Message;