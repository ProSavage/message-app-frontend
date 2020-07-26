import React from "react";
import styled from "styled-components";
import { ArrowLeftCircle, UserPlus } from "react-feather";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 10px 35px rgba(133, 133, 133, 0.3);
  position: sticky;
  top: 0;
  background: white;
  z-index: 99999999;
`

const StatusText = styled.div`
  flex: 0 1 80%;
  text-align: center;
`




interface INavbarProps {
    status: string
    showBack: boolean
    showAddFriends: boolean
}

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {

    const history = useHistory()

    const showBackButton = () => {
       if (props.showBack) return <ArrowLeftCircle onClick={() => history.push("/contacts")}/>
    }

    const showAddFriendsButton = () => {
        if (props.showAddFriends) return <UserPlus onClick={() => history.push("/add-friends")}/>
    }

    return (
        <Wrapper>
            {showBackButton()}
            <StatusText>
                <p>{props.status}</p>
            </StatusText>
            {showAddFriendsButton()}
        </Wrapper>
    )
}

export default Navbar;