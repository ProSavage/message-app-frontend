import React, {useState} from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import Link from "./Link";
import {authAPI} from "../AxiosInstance";
import {useHistory} from "react-router-dom";
import {AccountTokenContainer} from "../context/AccountContext";


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

    const history = useHistory()
    const accountTokenContainer = AccountTokenContainer.useContainer()


    const [status, setStatus] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (email.length === 0) {
            setStatus("Please enter an email")
            return
        }
        if (password.length === 0) {
            setStatus("Please enter a password")
            return;
        }

        authAPI().login(email, password).then(res => {
            console.log(res)
            if (res.success) {
                setStatus("Logged in!")
                accountTokenContainer.setAccountToken(res.token)
                return
            } else {
                setStatus(res.message)
            }
        })
    }


    return (
        <Wrapper>
            <Form header={"Login"}>
                <p>{status}</p>
                <Input header={"Email"} type={"email"} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <Input header={"Password"} type={"password"} value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <Button onClick={(e) => login(e)}>
                    Login
                </Button>
                <Link to={"/signup"}>Or Signup</Link>
            </Form>
        </Wrapper>
    )
}

export default LoginBody;