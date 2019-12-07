import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import UserHome from './components/UserHome/UserHome.js';
import UnitLearnBlock from './components/UnitLearnBlock/UnitLearnBlock';
import UserRegistration from './components/UserRegistration/UserRegistration';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Spaced Rep</h1>

      </header>
      <main>
        <Route exact path="/learningSession" component={UnitLearnBlock}/>
        <Route exact path="/" component={UserRegistration}/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
