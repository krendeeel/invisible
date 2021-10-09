import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css'
import 'antd/dist/antd.css';

import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { UsersList } from './components/UsersList/UsersList';


const App = () => {
  return (
    <div className='wrapper'>
      
      <Router>
      <Header/>
      <Switch>
              <Route exact path='/profile/:id?' render={()=> <Profile role='admin' username='bob'/>}/>
              <Route path='/userslist' render={()=> <UsersList/>}/>

      </Switch>

            
      </Router>
      
    </div>
  );
}

export default App;
