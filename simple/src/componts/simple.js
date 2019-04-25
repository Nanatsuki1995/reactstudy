import React, { Component } from 'react';
import City from './city'
import Time from './time'
import Todo from './todo'
import Clock from './clock'
import Toggle from './toggle'
import './simple.scss'

class Simple extends React.Component {
    render() {
        return (
            <div>
                hello {this.props.name}
                <div>
                    welcome to <City/>
                </div>
                <Time/>
                <Todo/>
                <Clock/>
                <Toggle/>
            </div>

        )
    }
}

export default Simple