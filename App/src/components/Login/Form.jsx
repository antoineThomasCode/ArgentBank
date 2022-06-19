import React from "react";

import "../Login/Form.scss"

function Form ({requestType}) {
    function handleChange (e) {
        console.log(e)
    }
    return (
        <form action={requestType} className="connexion-form">
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={handleChange}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <input id="submit-button" type="submit" value="Sign In"></input>
        </form>
    )
}
export default Form