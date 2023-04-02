import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Props or state changes')
    }

    render() {
        return (
        <div>
            <h1>DidUpdate</h1>
        </div>
        )
    }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Props or state changes')
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}
