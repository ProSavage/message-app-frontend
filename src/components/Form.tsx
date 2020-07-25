import React from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-shadow: 0 10px 35px rgba(52, 52, 52, 0.13);
  border-radius: 10px;
`

const FormHeader = styled.h3`
  padding-bottom: 10px;
`


interface IFormProps {
    header?: string
    children?: React.ReactNode
}


const Form: React.FC<IFormProps> = (props: IFormProps) => {
    return (
        <Container>
            <FormHeader>{props.header}</FormHeader>
            {props.children}
        </Container>
    )
}

export default Form;