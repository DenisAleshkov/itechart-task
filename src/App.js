import React from 'react'
import MoviesContainer from './components/Movies/MoviesContainer'
import Details from './components/Details/Details'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <Switch>
                        <Route exact path='/' component={MoviesContainer} />
                        <Route exact path='/details/:id' render = {(props)=><Details {...props} />}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App