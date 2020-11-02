import React from 'react'
import Movies from './components/Movies/Movies'
import Details from './components/Details/Details'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/popular">
                        <Movies />
                    </Route>
                    <Route path="/details/:id">
                        <Details />
                    </Route>

                </Switch>
            </Router>

        )
    }
}

export default App