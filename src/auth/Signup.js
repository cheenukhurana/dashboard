import React from 'react'
import {Link} from 'react-router-dom'

function Signup()
{
    return (
        <div>
            <h3>Signup Mock</h3>
            <Link to="/login">Return to Login Page</Link>
        </div>
    );
}

export default Signup;