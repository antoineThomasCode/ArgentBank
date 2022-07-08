import React from "react";
import logo from '../../assets/images/ArgentBank-logo.png'
import { Link, useNavigate } from "react-router-dom";
import "../Generic/Header.scss"
import { useDispatch, useSelector } from "react-redux";
import { stopSession } from "../../redux/features/loginSlice";
import {cleanUserProfile} from "../../redux/features/userProfile"
import ProfileName from "./ProfileName";
import LogoutButton from "./LogoutButton";
import SigninButton from "./SigninButton";



function Header () {
    const isLogged = useSelector((state) => state.login.isConnected)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const firstName = useSelector((state) => state.userProfile.firstName)
    const  logOut = () => {
        dispatch(stopSession())
        dispatch(cleanUserProfile())
        navigate("/")
       
    }
    
    return (

        <header>
            <Link to="/">
                <img src={logo} alt="logo d'ArgentBank" />
            </Link>
            {isLogged ? (<div><ProfileName /><LogoutButton /></div>) : <SigninButton />}
        </header>
    )
}
export default Header