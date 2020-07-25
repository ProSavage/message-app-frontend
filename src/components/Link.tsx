import React from "react";
import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";


const StyledLink = styled(RouterLink)`
  text-align: center;
  color: rgba(27,109,181,1)
`

interface ILinkProps {
    to: string
    children?: React.ReactNode
}

const Link: React.FC<ILinkProps> = (props: ILinkProps) => {
    return <StyledLink to={props.to}>
        {props.children}
    </StyledLink>
}

export default Link;