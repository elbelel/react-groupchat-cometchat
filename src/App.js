import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Message } from './components/message';
import { Login } from './components/login';
import { Group } from './components/group';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <BrowserRouter>
       <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/group'  component={Group}/>
        <Route path='/message'  component={Message}/> 
      </Switch>
    </BrowserRouter>
  
  );
}

export default App;