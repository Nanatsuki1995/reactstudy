import React, { Component } from 'react';

class City extends React.Component {
    constructor(props) {
        super(props)
        this.state = { cityName: 'Chongqing', color: 'red' }
        console.log(this.state)
    }

    change = () => {
        this.setState({
            cityName: 'Beijing',
            color: 'blue'
        })
    }

    getBack = () => {
        this.setState({
            cityName: 'Chongqing',
            color: 'red'
        })
    }
    render() {
        return (
            <span style={{ color: this.state.color }}>
                {this.state.cityName}
                <button onClick={this.change}>变身</button>
                <button onClick={this.getBack}>返回</button>
            </span>
        )
    }

}

export default City