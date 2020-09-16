import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { useIsLoggedIn } from '../auth/UserProvider';

function PrivateRoute({component:Component, ...rest})
{
    const isLoggedIn = useIsLoggedIn();
    return (
        <Route {...rest} render={(props) => 
            isLoggedIn?(
                <Component {...props} />
            ):(
                <Redirect to="/login"/>
            )
        }
        />
    );
}

export default PrivateRoute;