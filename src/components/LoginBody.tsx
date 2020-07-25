import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import Link from "./Link";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
`



const LoginBody = () => {
    return (
        <Wrapper>
            <Form header={"Login"}>
                <Input header={"Username"} type={"text"}/>
                <Input header={"Password"} type={"password"}/>
                <br/>
                <Button>
                    Login
                </Button>
                <Link to={"/signup"}>Or Signup</Link>
            </Form>
        </Wrapper>
    )
}

export default LoginBody;