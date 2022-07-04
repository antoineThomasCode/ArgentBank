import React from "react";
import AccountCard from "./AccountCard";
import Welcome from "./Welcome";
import { useState } from "react";
import ChangeNameModal from "./ChangeNameModal";
import './UserProfileContent.scss'

function UserProfilContent () {
    const [changeName, setChangeName] = useState(false)
    const openChangeNameModale= () => {
        setChangeName(true)
    }
    const closeChangeNameModale = () => {
        setChangeName(false)
    }
    return (
        <div className="userProfile-container">
            <Welcome  />
            {changeName ? (<ChangeNameModal  closeChangeNameModal={closeChangeNameModale}/>) : false}
            <button onClick={openChangeNameModale}>Edit name</button>
            <AccountCard />
            <AccountCard />
            <AccountCard />
        </div>
    )
}
export default UserProfilContent