import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startSession } from "../../redux/features/loginSlice";
import requestHandler from "../../utils/genericFetch";
import { useNavigate } from "react-router-dom";
import "../Generic/GenericForm.scss"
import GenericForm from "../Generic/GenrericForm";
import GenericInput from "../Generic/Input";
function LoginForm () {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState(false)
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
                setErrorLogin(true) 
                dispatch(startSession(response?.body?.token));
                navigate("/user");
            } else {
                setErrorLogin(true)
            }
        };
        postApi();
   
    }
    
    return (
        <GenericForm className='connexion-form'>
            <GenericInput className='input-wrapper' label='Username'  htmlFor='username' id="username" type='text' handleChangeFunction={handleChangeUsername} />
            <GenericInput className='input-wrapper' label='password'  htmlFor='password' id="password" type='password' handleChangeFunction={handleChangePassword} />
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <input id="submit-button" type="submit" value="Sign In" onClick={handleSubmit}></input>
            {errorLogin ? (<div>Fail to login <br /> Please, retry !</div>) : null}
        </GenericForm>
    )
}
export default LoginForm