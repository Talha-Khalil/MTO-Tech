import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ClockInPage from './components/ClockInPage';
import ClockOutPage from './components/ClockOutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/clock-in" component={ClockInPage} />
        <Route path="/clock-out" component={ClockOutPage} />
      </Switch>
    </Router>
  );
}

export default App;
