import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {Progress } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Breadcrumb from '../../../components/Breadcrumb/';
import Header from '../../../components/Header';
import Google_Advert from '../../../components/AdUI/Google_Advert';
import classnames from 'classnames';
import Footer from '../../../components/Footer';
import { withRouter } from 'react-router'


const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';

// Card Chart 1
const cardChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Impressions ',
            backgroundColor: brandPrimary,
            borderColor: 'rgba(255,255,255,.55)',
            data: [65, 59, 84, 84, 51, 55, 40]
        }
    ],
};

const cardChartOpts1 = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
            },
            ticks: {
                fontSize: 2,
                fontColor: 'transparent',
            }

        }],
        yAxes: [{
            display: false,
            ticks: {
                display: false,
                min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
                max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
            }
        }],
    },
    elements: {
        line: {
            borderWidth: 1
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
    }
}

// Card Chart 2
const cardChartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandInfo,
            borderColor: 'rgba(255,255,255,.55)',
            data: [1, 18, 9, 17, 34, 22, 11]
        }
    ],
};

const cardChartOpts2 = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
            },
            ticks: {
                fontSize: 2,
                fontColor: 'transparent',
            }

        }],
        yAxes: [{
            display: false,
            ticks: {
                display: false,
                min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
                max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
            }
        }],
    },
    elements: {
        line: {
            tension: 0.00001,
            borderWidth: 1
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
    }
}

// Card Chart 3
const cardChartData3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [78, 81, 80, 45, 34, 12, 40]
        }
    ],
};

const cardChartOpts3 = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            display: false
        }],
        yAxes: [{
            display: false
        }],
    },
    elements: {
        line: {
            borderWidth: 2
        },
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
        },
    }
}

// Card Chart 4
const cardChartData4 = {
    labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.3)',
            borderColor: 'transparent',
            data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
        }
    ],
};

const cardChartOpts4 = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            display: false,
            barPercentage: 0.6,
        }],
        yAxes: [{
            display: false,
        }]
    }
};

const rows = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    // .... and more
];


// Main Chart

// convert Hex to RGBA
function convertHex(hex,opacity) {
    hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

//Random Numbers
function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
    data1.push(random(50,200));
    data2.push(random(80,100));
    data3.push(65);
}



class Ad extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);




        this.state = {
            dropdownOpen: false,
            filterText: '',
            ad : [],
            activeTab: '1',
            adId:""
        };
        this.state.ad = [
            {
                adId: "94045596868",
                adGroup: "USA:ENG:$:PT:AMER:USA:CA:Yosemite_National_Park:180672:Yosemite_National_Park:180672:D:EC::",
                ctr: "23.45%",
                cost: "23",
                pos: "1.2",
                score: "9",
                url : "http://www.booking.com/city/us/new-york.html?aid=306395;label=new-york-Rq*9j4EWVsc*7ElQI*TfEwS110121587789:pl:ta:p1500:p2:ac:ap1t1:neg:fi:tiaud-146342138710:kwd-4525987093:lp9061995:li:dec:dm;ws=&gclid=CjwKEAjw387JBRDPtJePvOej8kASJADkV9TLfCYx2bkdWTgCgYtkjN53i15xWZmOOg0gr3KZc_ZVjRoChJnw_wcB",
                landing_page : "www.booking.com/New-York-Ny/Hotels",
                heading_1 : "500 Hotels in New York NY",
                heading_2 : "Half-Price Hotels. Book now - booking.com",
                description : "Book your Hotel in New York NY online. No reservation costs. Great rates. Read Real Guest Reviews · We speak your language · Get Instant Confirmation · Secure Booking Types: Hotels, Apartments, Villas, Hostels, Resorts, B&Bs",
                query : "Hotel in New York"



            },


        ]
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab

            });
        }
    }


    redirectToAdPage(event) {

        window.location.href = "/campaign/ad-group/ads/ad?id=" + (event.target.innerText).trim();
    }

    render() {

        const params = new URLSearchParams(this.props.location.search);
         this.state.adId = params.get('id');

        return (
            <div className="app">
                <Header />
                <div className="app-body">

                    <main className="main">
                        <Breadcrumb />
                        <div className="container-fluid">
            <div className="animated fadeIn">
                <h6 style={{textAlign :"center"}}>METRICS FOR THE AD: {this.state.adId}</h6>
                <br/>
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-primary">
                    <div className="card-block pb-0">

                      <h4 className="mb-0">113</h4>
                      <p>Total Impressions of this ad</p>
                    </div>
                    <div className="chart-wrapper px-3">
                      <Line data={cardChartData1} options={cardChartOpts1} height={130}/>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-info">
                    <div className="card-block pb-0">
                      <h4 className="mb-0">10</h4>
                      <p>Total Clicks on this ad yesterday</p>
                    </div>
                    <div className="chart-wrapper px-3">
                      <Line data={cardChartData2} options={cardChartOpts2} height={130}/>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-warning">
                    <div className="card-block pb-0">
                      <h4 className="mb-0">8.55%</h4>
                      <p>CTR of this ad yesterday</p>
                    </div>
                    <div className="chart-wrapper">
                      <Line data={cardChartData3} options={cardChartOpts3} height={130}/>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-danger">
                    <div className="card-block pb-0">
                      <h4 className="mb-0">$10.21</h4>
                      <p>Cost of this ad yesterday</p>
                    </div>
                    <div className="chart-wrapper px-3">
                      <Bar data={cardChartData4} options={cardChartOpts4} height={130}/>
                    </div>
                  </div>
                </div>
              </div>
                <div className="card" style={{marginTop : -20}}>

                <div className="card-footer">


                  <ul>
                    <li>
                      <div className="text-muted">Total Search Queries that triggered this ad</div>
                      <strong>22</strong>
                    </li>
                      <li>
                      <div className="text-muted">Average Position</div>
                      <strong>2.2</strong>
                    </li>
                    <li className="hidden-sm-down">
                      <div className="text-muted">Average Cost per Click (CPC)</div>
                      <strong>$1.02</strong>
                    </li>
                    <li className="hidden-sm-down">
                      <div className="text-muted" style={{fontSize: 13}}>Average Cost per Thousand Impressions (CPM)</div>
                      <strong>$90.35</strong>
                    </li>
                  </ul>
                </div>
              </div>

                <div className="card" style={{marginTop : -20}}>

                    <div className="card-footer">

                        <div className="row">
                            <div className="col-sm-3">
                                <div className="callout callout-info">
                                    <strong className="text-muted">Search Term - Keyword Mapping Score</strong><br/>
                                    <strong className="h4">8</strong>
                                    <Progress className="progress-xs mt-2" color="success" value="80" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="callout callout-info">
                                    <strong className="text-muted">Ad Relevancy Score</strong><br/>
                                    <strong className="h4">6</strong>
                                    <div className="chart-wrapper">

                                    </div>
                                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="callout callout-info">
                                    <strong className="text-muted">Landing Page Score</strong><br/>
                                    <strong className="h4">3</strong>
                                    <div className="chart-wrapper">

                                    </div>
                                    <Progress className="progress-xs mt-2" color="danger" value="30" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="callout callout-info">
                                    <strong className="text-muted">Overall Score</strong><br/>
                                    <strong className="h4">7</strong>
                                    <div className="chart-wrapper">

                                    </div>
                                    <Progress className="progress-xs mt-2" color="warning" value="70" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop : -20}}>
                <div className="col-md-12">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}>
                                <i className="fa fa-info-circle fa-lg mt-2"></i> Ad Info
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}>
                                <i className="fa fa-google fa-lg mt-2"></i> Search Terms that triggered this Ad group
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}>
                                <i className="fa fa-key fa-lg mt-2"></i> Keywords that can trigger this Ad group
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }} >
                                <i className="fa fa-clone fa-lg mt-2"></i> Other Ads of this Ad group
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">

                            <div className="form-group row">
                                <div className="col-md-4">
                                    <div className="input-group">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-hashtag"></i> Ad Id</button>
                        </span>
                                        <input type="text" id="input1-group2" name="input1-group2" value={this.state.adId} className="form-control" disabled style={{backgroundColor: "white"}}/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="input-group">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-group"></i> Ad Group</button>
                        </span>
                                        <input type="text" id="input1-group2" name="input1-group2" value="USA:ENG:$:PT:AMER:USA:CA:Santa_Barbara:602277:Lavender_Inn_By_The_Sea:PE84820:E:NC:" className="form-control" disabled style={{backgroundColor: "white"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <div className="input-group">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-suitcase"></i> Campaign</button>
                        </span>
                                        <input type="text" id="input1-group2" name="input1-group2" value="USA:ENG:$:PT:AMER:USA:E:NC::" className="form-control" disabled style={{backgroundColor: "white"}}/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="input-group">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-font"></i> Account</button>
                        </span>
                                        <input type="text" id="input1-group2" name="input1-group2" value="G:USA:ENG:$:PT:X:" className="form-control"disabled style={{backgroundColor: "white"}}/>
                                    </div>
                                </div>
                            </div>



                        </TabPane>
                        <TabPane tabId="2">
                            <div className="card-block">
                                <button type="button" className="btn btn-outline-primary active">bayfront inn santa cruz</button>
                                <button type="button" className="btn btn-outline-secondary active">lux tea horse road benzilan</button>
                                <button type="button" className="btn btn-outline-success active">tahiti village hotel las vegas</button>
                                <button type="button" className="btn btn-outline-info active">del valle lodge</button>
                                <button type="button" className="btn btn-outline-warning active">center bridge inn</button>
                                <button type="button" className="btn btn-outline-danger active">divi phoenix aruba</button>
                                <button type="button" className="btn btn-outline-warning active">center bridge inn</button>
                                <button type="button" className="btn btn-outline-danger active">indian springs calistoga ca</button>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="card-block">
                                <button type="button" className="btn btn-outline-primary active">+hotel +10 +montreal</button>
                                <button type="button" className="btn btn-outline-secondary active">[bayfront inn santa cruz]</button>
                                <button type="button" className="btn btn-outline-success active"> +seagate +hotel</button>
                                <button type="button" className="btn btn-outline-info active">[ofelias hotel barcelona]</button>
                                <button type="button" className="btn btn-outline-warning active"> +beach +tower +okinawa</button>
                                <button type="button" className="btn btn-outline-danger active">[grand hotel ocean city md]</button>
                            </div>
                        </TabPane>
                        <TabPane tabId="4">
                            <div className="card-block">
                                <button type="button" className="btn btn-outline-info active" onClick={this.redirectToAdPage.bind(this)}>8237643245987345</button>
                                <button type="button" className="btn btn-outline-warning active" onClick={this.redirectToAdPage.bind(this)}>2374234927364</button>
                                <button type="button" className="btn btn-outline-danger active" onClick={this.redirectToAdPage.bind(this)}>435786234592345</button>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>


                <div className="row" style={{marginTop : 5}}>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header" style={{textAlign : "centre"}}>CURRENT AD</div>
                            <div className="card-block"> <Google_Advert data={this.state.ad}/></div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">NEW AD SUGGESTION</div>
                            <div className="card-block"> <Google_Advert data={this.state.ad}/></div>
                        </div>
                    </div>
                </div>




              {/*<div className="row">*/}
                  {/*<div className="col-md-6">*/}
                  {/*<div className="card">*/}
                      {/*<Google_Advert data={this.state.ad}/>*/}
                  {/*</div>*/}
                      {/*<div className="col-md-12" style={{float:"right"}}>*/}

                              {/*<Google_Advert data={this.state.ad}/>*/}

                      {/*</div>*/}
              {/*</div>*/}
              {/*</div>*/}

            </div>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}



export default withRouter(Ad);
