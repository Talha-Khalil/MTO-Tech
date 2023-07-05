import React from 'react';
import LoginPage from './LoginPage.jsx'
import ClockIn from './ClockIn.jsx'
import ClockOut from './ClockOut';

function App() {
  return (
   <div className="app">
    <LoginPage/>
    <ClockIn/>
    <ClockOut/>
   </div>
  );
}

export default App;
