import React from "react";
import logo from '../../assets/images/ArgentBank-logo.png'
import { Link } from "react-router-dom";
import "../Generic/Header.scss"

function Header () {
    return (

        <header>
            <Link to="/">
                <a><img src={logo} alt="logo d'ArgentBank" /></a>
            </Link>
            <Link to='/login'><i class="fa fa-user-circle"></i>Sign-in</Link>
            <h1 class="main-title-home">Argent Bank</h1>
        </header>
    )
}
export default Header