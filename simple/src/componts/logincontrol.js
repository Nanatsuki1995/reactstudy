import React, { Component } from 'react';

function UserGreeting(props) {
    return <h1>Welcome back</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up</h1>
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
      </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
      </button>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    console.log(props)
    if (isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isLoggedIn: false }
    }

    handleLoginClick = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn

        let button = null
        if (!isLoggedIn) {
            button = <LoginButton onClick={this.handleLoginClick} />
        } else {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

export default LoginControl