import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import LoginBody from "../components/LoginBody";
import SignupBody from "../components/SignupBody";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

const SignupPage = () => {

    return (
        <Wrapper>
            <Navbar status={"Please Signup to get started"} showBack={false}/>
            <SignupBody/>
        </Wrapper>
    )
}

export default SignupPage;
