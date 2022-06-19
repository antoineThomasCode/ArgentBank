import React from "react";
import Form from "./Form";
import "../Login/SignInContent.scss"

function SignInContent () {
    return (
        <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Form requestType={'POST'} />
        </section>
    )
}
export default SignInContent