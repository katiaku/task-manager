import React, { useState } from 'react';

// Login / Logout buttons
const LoginButton = ({loginAction}) => {
    return (
        button = <button onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction}) => {
    return (
        button = <button onClick={logoutAction}>Logout</button>
    )
}

const OptionalRender = () => {

    const [access, setAccess] = useState(true);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;

    // if(access){
    //     button = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     button = <button onClick={updateAccess}>Login</button>
    // }

    if(access){
        button = <LogoutButton logoutAction={logoutAction}></LogoutButton>
    }else{
        button = <LoginButton loginAction={loginAction}></LoginButton>
    }

    return (
        <div>
            { optionalButton }
        </div>
    );
}

export default OptionalRender;
