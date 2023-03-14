import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route:', location.pathname); // '/about | /faqs'

    const navigate = (path) => {
        history.push(path);
    }

    const goBack = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward()
    }

    return (
        <div>
            <h1>About | FAQs</h1>
            <div>
                <button onClick={ () => navigate('/')}>Go To Home</button>
                <button onClick={ goBack }>Go Back</button>
                <button onClick={ goForward }>Go Back</button>
            </div>
        </div>
    );
}

export default AboutPage;
