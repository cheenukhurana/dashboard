import React, {useRef, useEffect, useState} from 'react'
import {useAuth} from './auth/AuthProvider'
import {useUser, useIsLoggedIn} from './auth/UserProvider'

function useComponentVisible(initialIsVisible,ref) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);

    const handleClickOutside = (event) => {
        if (ref && ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { isComponentVisible, setIsComponentVisible };
}

function TopMenu()
{
    const {setAuthTokens} = useAuth();
    const {user} = useUser();
    const isLoggedIn = useIsLoggedIn();
    const ref = useRef(null);
    const {isComponentVisible, setIsComponentVisible } = useComponentVisible(false,ref);

    function handleLogout()
    {
        setAuthTokens(null);
    }

    return (
        <div>
            {(isLoggedIn)?(
                <>
                    <ul className='list'>
                    <li ref={ref}>
                        <a onClick={()=>setIsComponentVisible(!isComponentVisible)}>{user.name}</a>
                        {
                            (isComponentVisible)?(
                                <ul>
                                    <button onClick={handleLogout}>Logout</button>
                                </ul>
                            ):""
                        }
                    </li> 
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                </>
            ):(
                <>
                </>
            )}
        </div>
    )
}

export default TopMenu;