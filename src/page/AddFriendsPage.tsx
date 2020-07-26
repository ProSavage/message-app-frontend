import React from "react";
import Navbar from "../components/Navbar";
import AddFriends from "../components/AddFriendsBody";
import AddFriendsBody from "../components/AddFriendsBody";



const AddFriendsPage = () => {
    return (
        <>
            <Navbar status={"Search by username"} showBack={true} showAddFriends={false}/>
            <AddFriendsBody/>
        </>
    )
}

export default AddFriendsPage;
