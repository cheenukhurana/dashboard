import React, {useState, useContext} from 'react';
import {useAuth} from './AuthProvider';
import jwt from 'jsonwebtoken'

const UserContext = React.createContext();

function UserProvider(props)
{
    const [state,setState] = useState({
        status: 'pending',
        user: null
    });

    const {authTokens} = useAuth();

    React.useEffect(()=>{
        if(authTokens)
        {
            var receivedBearerToken = JSON.parse(authTokens).token;
            var token = receivedBearerToken.replace("Bearer ","");
            var decodedToken = jwt.decode(token);
            if(decodedToken.name && decodedToken.name!=="")
            {
                setState({status:"success",user:{name:decodedToken.name,email:decodedToken.email}})
            }
            else
            {
                setState({status:"error",user:null});
            }
        }
        else
        {
            setState({status:"pending",user:null});
        }
    },[authTokens]);

    return (
        
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    );
}

function useUser()
{
    const user = useContext(UserContext);
    return {...user};
}

function useIsLoggedIn()
{
    const user = useContext(UserContext);
    return user.status==="success" && user.name!=="";
}

export {UserProvider, useUser, useIsLoggedIn};