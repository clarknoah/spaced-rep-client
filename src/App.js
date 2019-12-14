import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import UserHome from './components/UserHome/UserHome.js';
import UnitLearnBlock from './components/UnitLearnBlock/UnitLearnBlock';
import UserRegistration from './components/UserRegistration/UserRegistration';
import UserLogin from './components/UserLogin/UserLogin';
import SubjectHome from './components/SubjectHome/SubjectHome';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/userHome"><h1>Spaced Rep</h1></Link>

      </header>
      <main>
        <Route exact path="/subjects/:subject/topics/:topic/session" component={UnitLearnBlock}/>
        <Route exact path="/register" component={UserRegistration}/>
        <Route exact path="/" component={UserLogin}/>
        <Route exact path="/userHome" component={UserHome}/>
        <Route exact path="/subjects/:subject" component={SubjectHome}/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
