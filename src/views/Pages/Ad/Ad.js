import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {Progress } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Breadcrumb from '../../../components/Breadcrumb/';
import Header from '../../../components/Header';
import Google_Advert from '../../../components/AdUI/Google_Advert';
import Google_Advert2 from '../../../components/Google_Advert/Google_Advert2';
import classnames from 'classnames';
import Footer from '../../../components/Footer';
import { withRouter } from 'react-router'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';


const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';


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


let date;

class Ad extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);





        this.state = {
            dropdownOpen: false,
            filterText: '',
            ad : {},
            activeTab: '1',
            adId:"",
            primary:"",
            account: "G:USA:ENG:$:PT:X:",
            allSearchQueries: [],
            keywords: [],
            otherAds:[],
            impressions: [],
            clicks: [],
            ctr: [],
            cost: [],
            currentAd: {},
            newAd: {}


        };
        // this.state.ad =  {
        //     adId: "94045596868",
        //     adGroup: "USA:ENG:$:PT:AMER:USA:CA:Yosemite_National_Park:180672:Yosemite_National_Park:180672:D:EC::",
        //     clicks: "8",
        //     impressions: "16",
        //     ctr: "23.45%",
        //     cost: "23",
        //     cpc: "23",
        //     cpm: "25",
        //     campaign:"USA:ENG:$:PT:AMER:USA:E:NC::",
        //     totalSearchQueries: "123",
        //     searchScore : "5",
        //     adScore: "7",
        //     lpScore: "6",
        //     overallScore : "7",
        //     pos: "1.2",
        //     score: "9",
        //     allSearchQueries: ["bayfront inn santa cruz", "lux tea horse road benzilan", "tahiti village hotel las vegas"],
        //     keywords: ["+hotel +10 +montreal","[bayfront inn santa cruz]"," +seagate +hotel", "[ofelias hotel barcelona]"],
        //     otherAds: ["1234213421341234","213421343241234", "43564564536"],
        //     currentAd: {
        //         url : "http://www.booking.com/city/us/new-york.html?aid=306395;label=new-york-Rq*9j4EWVsc*7ElQI*TfEwS110121587789:pl:ta:p1500:p2:ac:ap1t1:neg:fi:tiaud-146342138710:kwd-4525987093:lp9061995:li:dec:dm;ws=&gclid=CjwKEAjw387JBRDPtJePvOej8kASJADkV9TLfCYx2bkdWTgCgYtkjN53i15xWZmOOg0gr3KZc_ZVjRoChJnw_wcB",
        //         landing_page : "www.booking.com/New-York-Ny/Hotels",
        //         heading_1 : "Booking.com: 500 Hotels in New York NY",
        //         heading_2 : "Half-Price Hotels. Book now - booking.com",
        //         description : "Book your Hotel in New York NY online. No reservation costs. Great rates. Read Real Guest Reviews · We speak your language · Get Instant Confirmation · Secure Booking Types: Hotels, Apartments, Villas, Hostels, Resorts, B&Bs",
        //
        //
        //     },
        //     newAD: {
        //         url : "http://www.booking.com/city/us/new-york.html?aid=306395;label=new-york-Rq*9j4EWVsc*7ElQI*TfEwS110121587789:pl:ta:p1500:p2:ac:ap1t1:neg:fi:tiaud-146342138710:kwd-4525987093:lp9061995:li:dec:dm;ws=&gclid=CjwKEAjw387JBRDPtJePvOej8kASJADkV9TLfCYx2bkdWTgCgYtkjN53i15xWZmOOg0gr3KZc_ZVjRoChJnw_wcB",
        //         landing_page : "www.booking.com/New-York-Ny/Hotels",
        //         heading_1 : "Expedia : 500 Hotels in New York NY",
        //
        //         description : "Book your Hotel in New York NY online. No reservation costs. Great rates. Read Real Guest Reviews · We speak your language · Get Instant Confirmation · Secure Booking Types: Hotels, Apartments, Villas, Hostels, Resorts, B&Bs"
        //
        //
        //     },
        //
        //     adPastDaysData : {
        //         totalImpressions: [65,59,84,84,51],
        //         totalClicks: [65,59,84,84,51],
        //         totalCtr: [0.22,0.33,0.45,1.22,1.46],
        //         totalCost: [25,29,14,15,13]
        //
        //     }
        //
        //
        //
        // }
        //
        //

    }
    componentDidMount() {
        let _this = this;
        this.serverRequest =
            axios
                .get("http://127.0.0.1:3007/get")
                .then(function(result) {
                    console.log(result);
                    _this.setState({
                        ad: result.data.ad,
                        currentAd: result.data.ad.currentAd,
                        newAd: result.data.ad.newAd,
                        allAdsData: result.data.ad.adPastDaysData,
                        impressions: result.data.ad.adPastDaysData.totalImpressions,
                        clicks: result.data.ad.adPastDaysData.totalClicks,
                        ctr: result.data.ad.adPastDaysData.totalCtr,
                        cost: result.data.ad.adPastDaysData.totalCost,
                        allSearchQueries: result.data.ad.allSearchQueries,
                        keywords: result.data.ad.keywords,
                        otherAds: result.data.ad.otherAds,



                    });
                })

    }

    componentWillUnmount() {
        this.serverRequest.abort();
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

        // Card Chart 1
        const cardChartData1 = {
            labels: ['Jun 9', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13'],
            datasets: [
                {
                    label: 'Impressions ',
                    backgroundColor: brandPrimary,
                    borderColor: 'rgba(255,255,255,.55)',
                    data: this.state.impressions
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
            labels: ['Jun 9', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13'],
            datasets: [
                {
                    label: 'Clicks',
                    backgroundColor: brandInfo,
                    borderColor: 'rgba(255,255,255,.55)',
                    data: this.state.clicks
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
            labels:['Jun 9', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13'],
            datasets: [
                {
                    label: 'CTR',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: this.state.ctr
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
                    display: false,
                    ticks: {
                        display: false,

                    }
                }],
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            }
        }

// Card Chart 4
        const cardChartData4 = {
            labels: ['Jun 9', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13'],
            datasets: [
                {
                    label: 'Cost',
                    backgroundColor: 'rgba(255,255,255,.3)',
                    borderColor: 'transparent',
                    data: this.state.cost
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


        const params = new URLSearchParams(this.props.location.search);
         this.state.adId = params.get('id');
         date= params.get('date');









        return (
            <div className="app">
                <Header />
                <div className="app-body">

                    <main className="main">
                        <Breadcrumb />
                        <div className="container-fluid">
            <div className="animated fadeIn">
                <h6 style={{textAlign :"center"}}>METRICS FOR THE AD: <strong>{this.state.adId}</strong> for <strong>{date}</strong></h6>
                <br/>
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-primary">
                    <div className="card-block pb-0">

                      <h4 className="mb-0">{this.state.ad.impressions}</h4>
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
                      <h4 className="mb-0">{this.state.ad.clicks}%</h4>
                      <p>Total Clicks on this ad</p>
                    </div>
                    <div className="chart-wrapper px-3">
                      <Line data={cardChartData2} options={cardChartOpts2} height={130}/>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-warning">
                    <div className="card-block pb-0">
                      <h4 className="mb-0">{this.state.ad.ctr}</h4>
                      <p>CTR of this ad</p>
                    </div>
                    <div className="chart-wrapper">
                      <Line data={cardChartData3} options={cardChartOpts3} height={130}/>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-danger">
                    <div className="card-block pb-0">
                      <h4 className="mb-0">${this.state.ad.cost}</h4>
                      <p>Cost of this ad</p>
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
                      <strong>{this.state.ad.totalSearchQueries}</strong>
                    </li>
                      <li>
                      <div className="text-muted">Average Position</div>
                      <strong>{this.state.ad.pos}</strong>
                    </li>
                    <li className="hidden-sm-down">
                      <div className="text-muted">Average Cost per Click (CPC)</div>
                      <strong>${this.state.ad.cpc}</strong>
                    </li>
                    <li className="hidden-sm-down">
                      <div className="text-muted" style={{fontSize: 13}}>Average Cost per Thousand Impressions (CPM)</div>
                      <strong>${this.state.ad.cpm}</strong>
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
                                    <strong className="h4">{this.state.ad.searchScore}</strong>
                                    <Progress className="progress-xs mt-2" color="success" value={this.state.ad.searchScore * 10} />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="callout callout-info">
                                    <strong className="text-muted">Ad Relevancy Score</strong><br/>
                                    <strong className="h4">{this.state.ad.adScore}</strong>
                                    <div className="chart-wrapper">

                                    </div>
                                    <Progress className="progress-xs mt-2" color="warning" value={this.state.ad.adScore * 10} />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="callout callout-info">
                                    <strong className="text-muted">Landing Page Score</strong><br/>
                                    <strong className="h4">{this.state.ad.lpScore}</strong>
                                    <div className="chart-wrapper">

                                    </div>
                                    <Progress className="progress-xs mt-2" color="danger" value={this.state.ad.lpScore * 10} />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="callout callout-info">
                                    <strong className="text-muted">Overall Score</strong><br/>
                                    <strong className="h4">{this.state.ad.overallScore}</strong>
                                    <div className="chart-wrapper">

                                    </div>
                                    <Progress className="progress-xs mt-2" color="warning" value={this.state.ad.overallScore * 10} />
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
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '5' })}
                                onClick={() => { this.toggle('5'); }} >
                                <i className="fa fa-cogs fa-lg mt-2"></i> Ad Settings
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
                                        <input type="text" id="input1-group2" name="input1-group2" value={this.state.ad.adGroup} className="form-control" disabled style={{backgroundColor: "white"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <div className="input-group">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-suitcase"></i> Campaign</button>
                        </span>
                                        <input type="text" id="input1-group2" name="input1-group2" value={this.state.ad.campaign} className="form-control" disabled style={{backgroundColor: "white"}}/>
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
                            <div className="card-block" id="google">
                            <ButtonArray  searchquery={this.state.allSearchQueries}/>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="card-block">
                                <ButtonArray searchquery={this.state.keywords}/>
                            </div>
                        </TabPane>
                        <TabPane tabId="4">
                            <div className="card-block">
                                {/*<button type="button" className="btn btn-outline-info active" onClick={this.redirectToAdPage.bind(this)}>8237643245987345</button>*/}
                                {/*<button type="button" className="btn btn-outline-warning active" onClick={this.redirectToAdPage.bind(this)}>2374234927364</button>*/}
                                {/*<button type="button" className="btn btn-outline-danger active" onClick={this.redirectToAdPage.bind(this)}>435786234592345</button>*/}
                                <ButtonArray searchquery={this.state.otherAds}/>
                            </div>
                        </TabPane>
                        <TabPane tabId="5">
                            <div className="card-block">
                                <span>Ad State: &nbsp;</span>
                                <label className="switch switch-3d switch-primary">
                                    <input type="checkbox" className="switch-input" defaultChecked onChange={this.handleCheckBoxChange}/>
                                    <span className="switch-label"></span>
                                    <span className="switch-handle"></span>
                                </label>
                                <span style={{marginLeft:30}}>Replace current Landing page with suggested Landing page: &nbsp;</span>
                                <label className="switch switch-3d switch-primary">
                                    <input type="checkbox" className="switch-input"  onChange={this.handleCheckBoxChange}/>
                                    <span className="switch-label"></span>
                                    <span className="switch-handle"></span>
                                </label>
                                <span style={{marginLeft:30}}>Replace current Ad with suggested Ad: &nbsp;</span>
                                <label className="switch switch-3d switch-primary">
                                    <input type="checkbox" className="switch-input"  onChange={this.handleCheckBoxChange}/>
                                    <span className="switch-label"></span>
                                    <span className="switch-handle"></span>
                                </label>
                                <Button color="success" style={{ float:"right"}}>Save Ad Settings</Button>

                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>


                <div className="row" style={{marginTop : 5}}>
                    <div className="col-sm-6">
                        <div className="card card-accent-danger">
                            <div className="card-header" style={{textAlign : "centre"}} >CURRENT AD
                                {/*<Button color="success" onClick={this.togglePrimary} style={{ float:"right", marginTop: 2}}>Edit</Button>*/}
                            </div>

                            <div className="card-block"> <Google_Advert data={this.state.currentAd}/></div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card card-accent-info">
                            {/*style={{height: 60}}*/}
                            <div className="card-header" >NEW AD SUGGESTION
                            </div>
                            <div className="card-block"> <Google_Advert2 data={this.state.newAd}/></div>
                        </div>
                    </div>
                </div>





            </div>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

class ButtonArray extends Component {
    render() {
        let classes = ["btn-outline-primary active", "btn-outline-secondary active", "btn-outline-success active", "btn-outline-info active", "btn-outline-warning active", "btn-outline-danger",
            "btn-outline-primary active", "btn-outline-secondary active", "btn-outline-success active", "btn-outline-info active", "btn-outline-warning active", "btn-outline-danger",
            "btn-outline-primary active", "btn-outline-secondary active", "btn-outline-success active", "btn-outline-info active", "btn-outline-warning active", "btn-outline-danger",
            "btn-outline-primary active", "btn-outline-secondary active", "btn-outline-success active", "btn-outline-info active", "btn-outline-warning active", "btn-outline-danger",
            "btn-outline-primary active", "btn-outline-secondary active", "btn-outline-success active", "btn-outline-info active", "btn-outline-warning active", "btn-outline-danger",
            "btn-outline-primary active", "btn-outline-secondary active", "btn-outline-success active", "btn-outline-info active", "btn-outline-warning active", "btn-outline-danger"]




        let div_ele = [];
        for(var i=0;i<this.props.searchquery.length;i++){

            let classNae = "btn " + classes[i];

            var ele = <button type="button" className={classNae}>{this.props.searchquery[i]}</button>;

            div_ele.push(ele);


        }
        return <div>{div_ele}</div>;
    }
}





export default withRouter(Ad);
