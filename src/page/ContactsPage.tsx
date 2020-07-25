import React from "react";
import styled from "styled-components";
import ContactPreview from "../components/ContactPreview";
import Navbar from "../components/Navbar";


const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`


const ContactsPage = () => {
    return (
        <>
            <Navbar status={"Contacts"} showBack={false}/>
            <ContactsWrapper>
                <ContactPreview name={"Ansh Gupta"} ago={new Date(new Date().getTime() - 12123)} message={"Yeah boii."}/>
                <ContactPreview name={"Naman Gupta"} ago={new Date(new Date().getTime() - 12112123)} message={"Check out this meme."}/>
                <ContactPreview name={"Shubh Gupta"} ago={new Date(new Date().getTime() - 521121233)} message={"I want to try this library out dude."}/>
                <ContactPreview name={"Nishtha Gupta"} ago={new Date(new Date().getTime() - 1221121233)} message={"Check out my channel."}/>
            </ContactsWrapper>
        </>
    )
}

export default ContactsPage;