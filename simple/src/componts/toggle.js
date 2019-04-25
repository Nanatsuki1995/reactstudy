import React, { Component } from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        }
        // this.handleClick = this.handleClick.bind(this)
        // 如果这里不使用bind绑定this，handleClick就要使用回调函数来绑定this
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <h3>开关状态：{this.state.isToggleOn ? 'ON' : 'OFF'}</h3>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default Toggle