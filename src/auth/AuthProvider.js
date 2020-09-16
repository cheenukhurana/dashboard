import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';

const AuthContext = React.createContext();

function AuthProvider(props)
{

    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);

    function setTokens(data)
    {
        localStorage.setItem("tokens",JSON.stringify(data));
        setAuthTokens(data);
    }

    return (
        <AuthContext.Provider value={{authTokens,setAuthTokens:setTokens}}>
            {props.children}
        </AuthContext.Provider>
    );
}

function useAuth()
{
    const authContext = useContext(AuthContext);
    return authContext;
}

export {AuthProvider, useAuth};