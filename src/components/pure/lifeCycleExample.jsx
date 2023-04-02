/**
 * Ejemplo de componente tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('Constructor')
    }

    componentWillMount() {
        console.log('WillMount')
    }

    componentDidMount() {
        console.log('DidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate')
    }

    componentWillUnmount() {
        console.log('WillUnmount')
    }

    render() {
        return (
            <div>

            </div>
        )
    }

    // LifeCycleExample.PropTypes = {}
}