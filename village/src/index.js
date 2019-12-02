import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'font-awesome/css/font-awesome.min.css'
import App from './App';

ReactDOM.render(
    <Router>
     <App />
    </Router>,
    document.getElementById('root')
);
