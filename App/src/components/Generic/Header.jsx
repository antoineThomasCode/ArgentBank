import React from "react";
import logo from '../../assets/images/ArgentBank-logo.png'
import { Link } from "react-router-dom";
import "../Generic/Header.scss"

function Header () {
    return (

        <header>
            <Link to="/">
                <img src={logo} alt="logo d'ArgentBank" />
            </Link>
            <Link to='/login'><i className="fa fa-user-circle"></i>Sign-in</Link>
        </header>
    )
}
export default Header