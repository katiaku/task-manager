import React, { useState } from 'react';
import PropTypes from 'prop-types';

function StateComponent({ state }) {
    const [connected, setConnected] = useState(state);
    return (
        <div>
            <h3> {connected === false ? 'The contact is not available' : 'The contact is online'}</h3>
            <button onClick={() => setConnected(!connected)}>
                {connected === false ? 'Connect' : 'Disconnect'}
            </button>
        </div>
    );
}

StateComponent.propTypes = {
    state: PropTypes.bool,
};

export default StateComponent;