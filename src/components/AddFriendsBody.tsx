import React, {useEffect, useLayoutEffect, useState} from "react";
import styled from "styled-components";
import Input from "./Input";
import {messagingAPI} from "../AxiosInstance";
import {AccountTokenContainer} from "../context/AccountContext";
import {useHistory} from "react-router-dom";

const Wrapper = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const ResultContainer = styled.div`
  padding-top: 10px;
`


const AddFriendsBody = () => {

    const history = useHistory()
    const [results, setResults] = useState([])
    const [query, setQuery] = useState("")

    const accountTokenContainer = AccountTokenContainer.useContainer();

    useEffect(() => {
        if (query.length < 3) {
            setResults(results.filter((result: string) => result.toLowerCase().includes(query.toLowerCase())!))
            return
        }

        messagingAPI().searchContacts(accountTokenContainer.accountToken, query).then(res => {
            if (!res.success) {
                return
            }
            setResults(res.users)
        })
    }, [accountTokenContainer, query])

    const renderResults = () => {
        return results.map(result => {
            return <ResultContainer onClick={() => {
                messagingAPI().addContact(accountTokenContainer.accountToken, result)
                history.push(`/contacts/${result}`)
            }}>
                <p>{result}</p>
            </ResultContainer>
        })
    }


    return (
       <Wrapper>
           <Input header={"Username"} type={"text"} value={query} onChange={(e) => setQuery(e.target.value)}/>
           <ResultsContainer>
               {renderResults()}
           </ResultsContainer>
       </Wrapper>
    )
}

export default AddFriendsBody;