import React, { Component } from 'react';
import City from '../componts/city'
import Time from '../componts/time'
import Todo from '../componts/todo'
import Clock from '../componts/clock'
import Toggle from '../componts/toggle'
import LoginControl from '../componts/logincontrol'
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
                <LoginControl/>
            </div>

        )
    }
}

export default Simple