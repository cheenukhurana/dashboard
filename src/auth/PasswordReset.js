import React from 'react'
import { useState } from 'react';
import {Redirect} from 'react-router-dom';

function PasswordReset(props)
{
    const [password, setPassword] = useState("");
    const [passwordResetError, setPasswordResetError] = useState("");
    const [passwordResetDone,setPasswordResetDone] = useState(false);

    function handlePasswordReset(e)
    {
        e.preventDefault();
        setPasswordResetError("");
        setPasswordResetDone(true);
    }

    return (
        <div>
            {
                passwordResetDone?(
                    <Redirect to="/login"></Redirect> 
                ):(
                    <>
                        <h4>(Note-Password Reset page will have a unique id as shown in URL bar. You can enter new password to see how the flow works but password will not be changed at backend)</h4>
                        {/* <h4>Note- You can enter new password to </h4> */}
                        <form id="password-reset-form" name="password-reset-form" onSubmit={handlePasswordReset}>
                            <input className="form-input" name="password" type="password" placeholder="New Password" value={password} onChange={e=>setPassword(e.target.value)} required /><br/><br/>
                            <input className="form-input submit" type="submit" value="Save" />
                        </form>
                        { passwordResetError!=="" &&<div>{passwordResetError}</div> }
                    </>
                )
            }
        </div>
    );
}

export default PasswordReset;