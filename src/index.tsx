import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import initServices from './Services/index';
import { ServiceProvider } from './Services/ServiceContext';
class AppContainer extends Component {
    private Services;

    constructor(props) {
        super(props);

        this.Services = initServices();
    }

    render() {
        return (
            <ServiceProvider Services={this.Services}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ServiceProvider>
        );
    }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
