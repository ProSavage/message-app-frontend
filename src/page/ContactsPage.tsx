import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ContactPreview from "../components/ContactPreview";
import Navbar from "../components/Navbar";
import {AccountTokenContainer} from "../context/AccountContext";
import {messagingAPI} from "../AxiosInstance";


const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`


const ContactsPage = () => {

    const accountTokenContainer = AccountTokenContainer.useContainer()

    const [friends, setFriends] = useState([])

    const renderContacts = () => {
        return friends.map((friend: { username: string, message: string, time: number }) =>
            <ContactPreview key={friend.username} name={friend.username} ago={new Date(friend.time)} message={friend.message}/>)
    }

    useEffect(() => {
        messagingAPI().getContacts(accountTokenContainer.accountToken).then(res => {
            setFriends(res.friends)
        })
    }, [])

    return (
        <>
            <Navbar status={"Contacts"} showBack={false} showAddFriends={true}/>

            <ContactsWrapper>
                {renderContacts()}
            </ContactsWrapper>
        </>
    )
}

export default ContactsPage;