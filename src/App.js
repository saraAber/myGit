import React from 'react';
import {Route,Switch, Redirect} from 'react-router-dom'

import './App.css';

import CreditPayment from './continer/CreditPayment';
import Status from './continer/status';
import Repotes from './continer/repotes'
import Home from './componnent/home';
import Header from './componnent/Header';
import Login from './componnent/login';
import HeaderSuper from './super/Header';
import OrderContiner from './super/continer';


function App() {
  return (
    <div className="App">
      <Header/>
        <div className="bodyContent">
      {/* <Switch>
      <Route path="/"  exact component={Home} />
         {/* <Route path="/CreditPayment/Filed/:status" component={StatusFaild} /> 
         <Route path="/CreditPayment" component={CreditPayment} /> 
         <Route path="/statusPays" component={Status}/>
         <Route path="/Repotes" component={Repotes}/>
         <Route path="/login" component={Login}/>
        <Route path="/home"  exact component={Home} />
        <Redirect path="*" to="/home"  />

     </Switch> */}
    <OrderContiner/>
     </div>
    </div>
  );
}

export default App;
