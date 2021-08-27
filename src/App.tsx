import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About';
import Current from './components/Current';
import Historical from './components/Historical';
import Result from './components/Result';

function App() {
  return (
    <Router>

      <Navbar />

    <Switch>
      <Route path="/about"><About /></Route>
      <Route path="/current"><Current /></Route>
      <Route path="/history/select"><Historical /></Route>
      <Route path="/history/result"><Result /></Route>
    </Switch>

    </Router>
  );
}

export default App;
