import React from "react";
import logo from '../../assets/images/ArgentBank-logo.png'
import { Link, useNavigate } from "react-router-dom";
import "../Generic/Header.scss"
import { useDispatch, useSelector } from "react-redux";
import { stopSession } from "../../redux/features/loginSlice";

function Header () {
    const isLogged = useSelector((state) => state.login.isConnected)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const  logOut = () => {
        dispatch(stopSession())
        navigate('/')
    }
    
    return (

        <header>
            <Link to="/">
                <img src={logo} alt="logo d'ArgentBank" />
            </Link>
            {isLogged ? (<div className="header-buttons"><div><i className="fa fa-user-circle"></i>name</div><button onClick={logOut} > <i className="fa fa-sign-out"></i>Sign Out</button></div>) : <Link to='/login'><i className="fa fa-user-circle"></i>Sign-in</Link> }
        </header>
    )
}
export default Header