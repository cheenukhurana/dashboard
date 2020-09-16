import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { useIsLoggedIn } from '../auth/UserProvider';

function UnauthenticatedRoute({component:Component, ...rest})
{
    const isLoggedIn = useIsLoggedIn();
    return (
        <Route {...rest} render={(props) => 
            !isLoggedIn?(
                <Component {...props} />
            ):(
                <Redirect to="/"/>
            )
        }
        />
    );
}

export default UnauthenticatedRoute;