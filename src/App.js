import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homepage';
import Room from './components/pages/room'

// includes
import './assets/css/default.css';


function App() {
  return (
    <Router>
      <div className="App">

      <Header />

        <div className="pagewrap">
          <Route exact path='/' component={Homepage} />
          <Route path='/room/:roomid' component={Room} />
        </div>


      </div>
    </Router>
  );
}

export default App;
