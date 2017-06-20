import React, { Component } from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from '../../components/Header/';

import Breadcrumb from '../../components/Breadcrumb/';

import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/'

class Full extends Component {


  render() {
    return (

      <div className="app">
        <Header />
        <div className="app-body">

          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              <BrowserRouter>
              <Switch>
                <Route exact path="/campaign/ad-group/ads" name="Dashboard" component={Dashboard}/>


              </Switch>
              </BrowserRouter>
            </div>
          </main>

        </div>
        <Footer />
      </div>

    );
  }
}

export default Full;

