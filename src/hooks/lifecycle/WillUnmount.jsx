/**
 * Ejemplo de uso del método componentWillUnmound para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Before disappear')
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        return () => {
            console.log('Before disappear')
        };
    }, []);

    return (
        <div>
            <h1>
                WillUnmount
            </h1>
        </div>
    );
}
