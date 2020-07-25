import React, {useState} from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import Link from "./Link";
import {authAPI} from "../AxiosInstance"
import {useHistory} from "react-router-dom"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
`



const SignupBody = () => {

    const history = useHistory()

    const [status, setStatus] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const signup = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (email.length === 0) {
            setStatus("Please enter an email")
            return
        }
        if (password.length === 0) {
            setStatus("Please enter a password")
            return;
        }
        if (password !== confirmPassword) {
            setStatus("Passwords do not match")
            return;
        }

        authAPI().signup(username, email, password).then(res => {
            if (res.success) {
                setStatus("Registered! Redirecting in 3 seconds...")
                setTimeout(() => history.push("/login"), 3000)
                return
            } else {
                setStatus(res.message)
            }
        })
    }


    return (
        <Wrapper>
            <Form header={"Signup"}>
                <p>{status}</p>
                <Input header={"Email"} type={"email"} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <Input header={"Username"} type={"text"} value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
                <Input header={"Password"} type={"password"} value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                <Input header={"Confirm Password"} type={"password"} value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                <br/>
                <Button onClick={(e) => signup(e)}>
                    Signup
                </Button>
                <Link to={"/login"}>Or Login</Link>
            </Form>
        </Wrapper>
    )
}

export default SignupBody;