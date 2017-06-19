import React, { Component } from 'react';

import Header from '../../../components/Header/';

import Breadcrumb from '../../../components/Breadcrumb/';
import DatePicker from 'react-datepicker';
import moment from 'moment';


import Footer from '../../../components/Footer/';
import 'react-datepicker/dist/react-datepicker.css';




class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {
            startDate: moment(),
            checked: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleCheckBoxChange() {
        this.setState({
            checked: !this.state.checked
        });
    }

    static redirectToDashboard () {
        window.location.href = '/campaign?account=G:USA:ENG:$:PT:X';
    }

  render() {

      const datePicker = !this.state.checked
          ? <div className="row " ref="date-picker" style={{marginLeft : 2}}> Select the date: &nbsp;
              <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
              />
              <br/>
              <br/>
          </div>
          : null;
    return (

        <div className="app">
          <Header />
          <div className="app-body">

            <main className="main">
              <Breadcrumb />
              <div className="app flex-row align-items-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div className="card-group mb-0">
                        <div className="card p-4">
                          <div className="card-block">
                            <h1>Login</h1>
                            <p className="text-muted">Select the Account and Date to view the Dashboard</p>

                              <div class="form-group col-sm-4"><label>Account &nbsp;</label>
                                  <select class="form-control" id="ccyear">
                                      <option>G:USA:ENG:$:PT:X:</option>
                                      <option>G:UK:ENG:$:PT:X:</option>
                                  </select></div>

                            Need most recent Ads Analysis? &nbsp;
                            <label className="switch switch-3d switch-primary">
                              <input type="checkbox" className="switch-input" defaultChecked onChange={this.handleCheckBoxChange}/>
                              <span className="switch-label"></span>
                              <span className="switch-handle"></span>
                            </label>
                              <br/>
                              <br/>
                              {datePicker}

                            <div className="row">
                              <div className="col-6">
                                <button type="button" className="btn btn-primary px-4" onClick={Login.redirectToDashboard}>Login</button>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </main>

          </div>
          <Footer />
        </div>

    );
  }
}

export default Login;
