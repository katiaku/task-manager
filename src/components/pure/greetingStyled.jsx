import React, { useState } from 'react';

const loggedStyle = {
    color: 'white'
};

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false)

    const greetingUser = () => (<p>Hello, {props.name}</p>);
    const pleaseLogin = () => (<p>Please log in!</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? 
                greetingUser() 
                : 
                pleaseLogin()
            }
            <button onClick={() => {
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
