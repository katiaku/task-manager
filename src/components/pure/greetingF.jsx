import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <h1>
                Hello { props.name } from a functional component!
            </h1>
            <h2>
                Your age is: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Add years
                </button>
            </div>
        </div>            
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
