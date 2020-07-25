import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  background: #F9F9F9;
    border: 2px solid #848484;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    transition: 1s;
    
    &:focus {
      outline: none;
      transition: 1s;
      border:  2px solid rgb(109,217,217);
      box-shadow: 0 18px 35px rgba(27,109,181,0.24);
    }
`


interface IInputProps {
    header: string
    value?: string
    type: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInputProps> = (props: IInputProps) => {

    return (
        <Container>
            <strong>{props.header}</strong>
            <StyledInput onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder}/>
        </Container>
    )
}


export default Input;