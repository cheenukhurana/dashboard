import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from './AuthProvider';

function Login()
{
    const { setAuthTokens } = useAuth();
    const [loginError,setLoginError] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e)
    {
        e.preventDefault();

        
        const formElement = document.getElementById("login-form");

        if(userName !== "user1@91social.com" && userName !== "user2@91social.com")
        {
            setLoginError("Email Does Not Exist");
            return;
        }

        let actionURL = "";
        if(userName === "user1@91social.com" && password === "abcuser1")
        {
            actionURL = "https://47721846-5e44-4ec3-9ba8-fc49d796abcd.mock.pstmn.io";
        }
        else if(userName === "user2@91social.com" && password === "abcuser2")
        {
            actionURL = "https://ac8af39c-9d61-4238-b5d7-28a32e319a29.mock.pstmn.io"
        }
        else
        {
            setLoginError("Password Incorrect");
            return;
        }



        let status;
        const body = {
            email: userName,
            password: password
        }
        fetch(actionURL,{
            method: 'POST',
            body: new URLSearchParams(body)
        })
        .then((res) => {
            status=res.status;
            return res.text();
        })
        .then((data) => {
            if(status===200)
            {
                setAuthTokens(data);
                setLoginError("");
            }
            else
            {
                setLoginError("Mock Request Failed");
            }
        })
        .catch((error) => {
            setLoginError("There was an error submitting your input")
        });
    }

    return (
        <div>
            <form id="login-form" name="login-form" onSubmit={handleLogin}>
                    <input className="form-input" name="email" type="email" placeholder="Your Email Address" value={userName} onChange={e=>setUserName(e.target.value)} required /><br />
                    <input className="form-input" name="password" type="password" placeholder="Your Password" value={password} onChange={e=>setPassword(e.target.value)} required /><br />
                    <input className="form-input submit" type="submit" value="Log in to your account" />
            </form>
            <br/>
            <Link to="/password/new">Forgot Your Password?</Link>
            { loginError!=="" && <div>{loginError}</div> }
            <br/>
            <br/>
            <h4>Don't Have an Account?</h4>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default Login;