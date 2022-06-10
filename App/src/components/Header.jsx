import React from "react";
import logo from '../assets/images/ArgentBank-logo.png'
function Header () {
    return (

        <header>
            <a href="/">
                <img src={logo} alt="logo d'ArgentBank" />
            </a>
            <div><i class="fa fa-user-circle"></i>Sign-in</div>
            <h1 class="main-title-home">Argent Bank</h1>
        </header>
    )
}
export default Header