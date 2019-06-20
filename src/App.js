import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Login from './login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
