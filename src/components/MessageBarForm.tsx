import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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


const MessageBarForm = () => {
    return (
        <Wrapper>
            <Container>
                <MessageInput type="text"/>
                <SendButton>Send</SendButton>
            </Container>
        </Wrapper>

    )
}

export default MessageBarForm;