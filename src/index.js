import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


// Containers
import Full from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Campaign from './views/Pages/Campaign'
import AdGroup from './views/Pages/AdGroup'
import Ad from './views/Pages/Ad/'



ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" name="Login Page" component={Login}/>
      <Route exact path="/campaign/ad-group/ads/ad" name="Ad" component={Ad}/>
        <Route exact path="/campaign" name="Campaign" component={Campaign}/>
        <Route exact path="/campaign/ad-group" name="AdGroup" component={AdGroup}/>


      <Route path="/campaign/ad-group/ads" name="Home" component={Full}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))
