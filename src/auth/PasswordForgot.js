import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'

function PasswordForgot(e)
{

    const [passwordForgotError, setPasswordForgotError] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    function handlePasswordForgot(e)
    {
        setEmailSent(true);
        setPasswordForgotError("");
        e.preventDefault();
    }

    return (
        <div>
            {
                (emailSent)?(
                    <>
                        <h3>Email with password reset instructions has been sent</h3>
                        <h4>(Note- Password reset functionality is not set up at the backend yet)</h4>
                        <Link to="/reset/z2a580da70dec17a7d6457000ce2dd2d9">Click Here to see how Password Reset URL looks like</Link><br/><br/>
                        <Link to="/login">Return to Login Page</Link>
                    </>
                ):(
                    <>
                        <h3>Forgot Password</h3>
                        <p>Fill in your email below to receive reset instructions</p>
                        <form id="password-forgot-form" name="password-forgot-form" onSubmit={handlePasswordForgot}>
                            <input className="form-input" name="email" type="email" placeholder="Your Email Address" required /><br />
                            <input className="form-input submit" type="submit" value="Get Reset Instructions" />
                        </form>
                        { passwordForgotError!=="" &&<div>{passwordForgotError}</div> }
                    </>
                )    
            }
        </div>
    )
}

export default PasswordForgot;