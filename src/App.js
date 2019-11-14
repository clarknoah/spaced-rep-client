import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import UserHome from './components/UserHome/UserHome.js';
import UnitLearnBlock from './components/UnitLearnBlock/UnitLearnBlock';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Spaced Rep</h1>

      </header>
      <main>
        <Route exact path="/" component={UnitLearnBlock}/>

      </main>
      <footer></footer>
    </div>
  );
}

export default App;
