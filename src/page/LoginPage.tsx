import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import LoginBody from "../components/LoginBody";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

const LoginPage = () => {

    return (
        <Wrapper>
            <Navbar status={"Please Login To Continue"} showBack={false} showAddFriends={false}/>
            <LoginBody/>
        </Wrapper>
    )
}

export default LoginPage;
