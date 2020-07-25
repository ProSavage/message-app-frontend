import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-weight: bold;
  padding: 10px 20px;
  background: rgb(109,217,217);
  border: 2px solid #848484;
  border-radius: 5px;
  
  &:focus {
      outline: none;
      transition: 1s;
      border:  2px solid rgb(109,217,217);
      box-shadow: 0 18px 35px rgba(27,109,181,0.24);
    }
`

interface IButtonProps {
    children?: React.ReactNode
    onClick?: () => void
}


const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    return (
        <StyledButton onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}

export default Button;