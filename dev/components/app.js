import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutPage from './about/AboutPage'
import HomePage from './home/HomePage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/About'}>AboutPage</Link></li>
                    </ul>
                    <hr />
                     <p>This is ram</p>   
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/About' component={AboutPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;