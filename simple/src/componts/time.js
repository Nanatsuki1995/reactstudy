import React, { Component } from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props)
        this.state = { seconds: 0 }
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }))
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    stop = () => {
        console.log(this)
        clearInterval(this.interval)
    }

    start = () => {
        console.log(this)
        this.interval = setInterval(() => this.tick(), 1000);
    }

    clean = () => {
        this.setState({
            seconds: 0
        })
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
                <span>
                    <button onClick={this.start}>开始</button>
                    <button onClick={this.stop}>暂停</button>
                    <button onClick={this.clean}>清除</button>
                </span>
            </div>
        )
    }
}

export default Time