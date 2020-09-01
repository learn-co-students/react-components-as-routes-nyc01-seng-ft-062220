import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'






ReactDOM.render((
  <Router>
    <div>
      <Navbar/>
      <Route exact path="/" render={()=><Home/>} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path='/signup' render={()=> <Signup/>}/>
    </div>
  </Router>),
  document.getElementById('root')
);
