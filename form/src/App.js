import React from 'react'
import NameForm from './components/nameform'
import EssayForm from './components/essayform'
import FlavorForm from './components/flavorform';
import Reservation from './components/reservation';

class App extends React.Component {
    render() {
        return (
            <div>
                <NameForm />
                <hr />
                <EssayForm />
                <hr />
                <FlavorForm />
                <hr />
                <Reservation />
            </div>
        )
    }
}

export default App