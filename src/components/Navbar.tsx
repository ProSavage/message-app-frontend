import React from "react";
import styled from "styled-components";
import { ArrowLeftCircle } from "react-feather";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  padding: 10px;
  box-shadow: 0 10px 35px rgba(133, 133, 133, 0.3);
  position: sticky;
  top: 0;
  background: white;
  
  z-index: 99999999;
`

const StatusText = styled.p`
  padding-left: 10px;
`




interface INavbarProps {
    status: string
    showBack: boolean
}

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {

    const history = useHistory()

    const showBackButton = () => {
       if (props.showBack) return <ArrowLeftCircle onClick={() => history.push("/contacts")}/>

    }

    return (
        <Wrapper>
            {showBackButton()}
            <StatusText>
                {props.status}
            </StatusText>
        </Wrapper>
    )
}

export default Navbar;