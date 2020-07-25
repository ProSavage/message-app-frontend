import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
import timeAgo from "../DateUtil";



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
  
  
  :hover {
    cursor: pointer;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Name = styled.h3`
  text-transform: uppercase;
  padding-right: 10px;
`

interface IContactPreviewProps {
    name: string
    ago: Date
    message: string
}

const ContactPreview: React.FC<IContactPreviewProps> = (props: IContactPreviewProps) => {

    const history = useHistory();

    return (
        <Wrapper onClick={() => history.push(`/contacts/${props.name}`)}>
            <Title>
                <Name>{props.name}</Name>
                <p>{timeAgo(props.ago)}</p>
            </Title>

            <p>{props.message}</p>
        </Wrapper>
    )
}

export default ContactPreview;