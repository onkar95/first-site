import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './blog.css'
import './contactAndFooter.css'
import './navbar.css'
import './blog-menu.css'
import './index.css'
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
