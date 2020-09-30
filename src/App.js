import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Info from './components/pages/Info';
import Play from './components/pages/Play';
import Video from './components/pages/Video';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/info' component={Info} />
          <Route path='/play' component={Play} />
          <Route path='/video' component={Video} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
