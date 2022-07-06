import React from "react";
import "./ChangeNameModale.scss"
import '../Generic/Button.scss'
import GenericInput from "../Generic/Input";
import { useSelector } from "react-redux";
import {useState} from 'react'
import requestHandler from "../../utils/genericFetch";
import GenericForm from "../Generic/GenrericForm";
function ChangeNameModal ({closeChangeNameModal}) {
    const firstName = useSelector((state) => state.userProfile.firstName)
    const lastName = useSelector((state) => state.userProfile.lastName)
    const token = useSelector((state) => state.login.token)

    
    const sendDataToBack = (e) => {
        e.preventDefault()
        console.log(token)
    }
   
 

    return (
        <div className="changeNameModale">    
            <GenericForm action="POST"  className='changeNameForm' >
                <GenericInput htmlFor="firstname" type="text" id="firstname" label='firstName' placeholder={firstName}/>
                <GenericInput htmlFor="lastname" type="text" id="lastname" label='lastname' placeholder={lastName} />
                <div className="cta-buttons">
                    <button className="button edit-button" onClick={(e) => sendDataToBack(e)}>Save</button>
                    <button className="button edit-button "  onClick={closeChangeNameModal}>Cancel</button>
                </div>
            </GenericForm>
        </div>
    )
}
export default ChangeNameModal