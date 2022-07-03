import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startSession } from "../../redux/features/loginSlice";
import requestHandler from "../../utils/genericFetch";
import { useNavigate } from "react-router-dom";
import "../Login/Form.scss"

function Form () {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
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
            if (response.status === 200) {
                dispatch(startSession(response?.body?.token));
                navigate("/user");
            } 
        };
        postApi();
   
    }
    
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