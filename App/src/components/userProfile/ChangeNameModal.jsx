import React from "react";
import "./ChangeNameModale.scss"

function ChangeNameModal ({closeChangeNameModal}) {
    return (
        <div className="changeNameModale">
            
            <form className="changeNameForm">
                <span className="close-cross" onClick={closeChangeNameModal}>x</span>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="firstname"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="lastname"/>
                </div>
                <input id="submit-button" type="submit"></input>
            </form>
        </div>
    )
}
export default ChangeNameModal