import React, { Component } from 'react';
import City from './city'
import Time from './time'
import Todo from './todo'

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
            </div>

        )
    }
}

export default Simple