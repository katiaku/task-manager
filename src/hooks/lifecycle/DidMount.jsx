import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Befor rendering')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Before rendering')
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}
