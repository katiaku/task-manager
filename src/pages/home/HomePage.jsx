import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route:', location.pathname);

    const navigate = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/profile')}>Go To Profile</button>
        </div>
    );
}

export default HomePage;
