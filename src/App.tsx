import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import 'nes.css/css/nes.min.css';

function App() {
    return (
        <React.Fragment>
            <Layout />
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/resume" component={Resume} />
                </Switch>
            </div>
        </React.Fragment>
    );
}

export default App;
