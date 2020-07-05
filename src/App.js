import React, {} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movies from './components/frontend/Movies.js';
import Details from './components/frontend/Details.js';

import './App.css';
import 'normalize.css';

function App() {
    return (
        <Router>
            <div>
            <div className="App">
                <h1>My Library</h1>
                <Route exact path='/' component={Movies} />
                <Route exact path='/Details' component={Details} />
            </div>
            </div>
        </Router>

    );
}

export default App;
