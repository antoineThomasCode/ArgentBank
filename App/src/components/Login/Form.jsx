import React from "react";
import { useState, useEffect } from "react";

import requestHandler from "../../utils/genericFetch";
import "../Login/Form.scss"

function Form () {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [authState, setAuthState] = useState({})
    
    function handleChangeUsername (e) {
        setUserName(e.target.value)
    }
    function handleChangePassword (e) {
        setPassword(e.target.value)
    }
    
    function handleSubmit (e) {
        e.preventDefault()
        if(!password?.length || !userName?.length) return
        
        const postApi = async () => {
            const bodyPost = {
                email : userName,
                password : password
              }
            const response = await requestHandler({
                url: `http://localhost:3001/api/v1/user/login/`,
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(bodyPost)
            });
            
            setAuthState(response);
        };
        postApi();
    }
    
   console.log(authState)
  

    
   
    return (
        <form className="connexion-form">
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={handleChangeUsername}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handleChangePassword}/>
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <input id="submit-button" type="submit" value="Sign In" onClick={handleSubmit}></input>
        </form>
    )
}
export default Form