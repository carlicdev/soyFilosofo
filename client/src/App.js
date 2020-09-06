import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Forum from './components/Forum/Forum';
import ThreadDetails from './components/Forum/ThreadDetails';
import ArticleList from './components/Articles/ArticleList';
import Dashboard from './components/User/Dashboard';
import Store from './components/Store/Store';
import Home from './components/Home/Home';
import Signup from './components/UserForms/Signup';
import LoginForm from './components/UserForms/LoginForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/articles' component={ArticleList} />
        <Route exact path='/forum' component={Forum} />
        <Route path='/forum/:slug' component={ThreadDetails} />
        <Route exact path='/user' component={Dashboard} />
        <Route exact path='/store' component={Store} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
