import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


// Containers
import Full from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Ad from './views/Pages/Ad/'



ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" name="Login Page" component={Login}/>
      <Route exact path="/dashboard/ad" name="Ad" component={Ad}/>

      <Route path="/dashboard" name="Home" component={Full}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))
