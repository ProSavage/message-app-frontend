import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-shadow: 0 10px 35px rgba(52, 52, 52, 0.13);
  border-radius: 10px;
`

const FormHeader = styled.h3`
  padding-bottom: 10px;
`




const LoginBody = () => {


    return (
        <Wrapper>
            <LoginForm>
                <FormHeader>Login</FormHeader>
                <Input header={"Username"} type={"text"}/>
                <Input header={"Password"} type={"password"}/>
                <br/>
                    <Button>
                        Login
                    </Button>

            </LoginForm>
        </Wrapper>
    )
}

export default LoginBody;