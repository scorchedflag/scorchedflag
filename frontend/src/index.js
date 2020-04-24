import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import AboutContainer from './containers/AboutContainer'
import FlagsContainer from './containers/FlagsContainer'
import ContactContainer from './containers/ContactContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {store} from './store'
import index from './index.css'

ReactDOM.render(
    <Router>
        <div>
        <Provider store={store}>
            <Route exact path='/' component={App} />
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/flags' component={FlagsContainer} />
            <Route exact path='/contact' component={ContactContainer} />
        </Provider>
        </div>
    </Router>,

document.getElementById('root')
);
serviceWorker.unregister();
