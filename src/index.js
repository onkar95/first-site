import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './blog.css'
import './contactAndFooter.css'
import './navbar.css'
import './blog-menu.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    {/* <HashRouter> */}
    <App />
    {/* </HashRouter> */}
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
