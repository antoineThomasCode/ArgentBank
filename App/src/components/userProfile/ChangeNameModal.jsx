import React from "react";
import "./ChangeNameModale.scss"
import '../Generic/Button.scss'

function ChangeNameModal ({closeChangeNameModal}) {
    return (
        <div className="changeNameModale">
            
            <form className="changeNameForm">
                <div className="input-wrapper">
                    <label htmlFor="firstname">Username</label>
                    <input type="text" id="firstname"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" id="lastname"/>
                </div>
                <div className="cta-buttons">
                    <button className="button edit-button ">Save</button>
                    <button className="button edit-button "  onClick={closeChangeNameModal}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default ChangeNameModal