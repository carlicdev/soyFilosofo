import './assets/main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import SessionContextProvider from './context/session_context';
import ForumContextProvider from './context/forum_context';

ReactDOM.render(
  <SessionContextProvider>
    <ForumContextProvider>
      <Router>
        <App />
      </Router>  
    </ForumContextProvider>
  </SessionContextProvider>,
  document.getElementById('root')
);
