import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const history = useNavigate();

    const navigateTo = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={() => navigateTo('/')}>Go Back To Home</button>
        </div>
    );
}

export default NotFoundPage;
