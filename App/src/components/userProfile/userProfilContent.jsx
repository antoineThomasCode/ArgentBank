import React from "react";
import AccountCard from "./AccountCard";
import Welcome from "./Welcome";

function UserProfilContent () {
    return (
        <div className="account-container">
            <Welcome  />
            <AccountCard />
            <AccountCard />
            <AccountCard />
        </div>
    )
}
export default UserProfilContent