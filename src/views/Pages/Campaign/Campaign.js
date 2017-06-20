import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {Progress } from 'reactstrap';

import Breadcrumb from '../../../components/Breadcrumb/';
import Header from '../../../components/Header';
import axios from 'axios';


const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';

let date;


class Campaign extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);


        this.state = {
            dropdownOpen: false,
            filterText: '',
            products : [],
            currentPage: 1,
            adsPerPage: 10,
            account: "",
            allAdsData: {},
            impressions: [],
            clicks: [],
            ctr: [],
            cost: []
        };
    }

    componentDidMount() {
        let _this = this;
        this.serverRequest =
        axios
            .get("http://127.0.0.1:3005/get")
            .then(function(result) {
                console.log(result);
                _this.setState({
                    products: result.data.campaignInfo,
                    allAdsData: result.data.allAdsData,
                    impressions: result.data.allAdsData.impressions,
                    clicks: result.data.allAdsData.clicks,
                    ctr: result.data.allAdsData.ctr,
                    cost: result.data.allAdsData.cost
                });
            })

}

    componentWillUnmount() {
    this.serverRequest.abort();
}

    handleUserInput(filterText) {
        this.setState(
            {
                filterText: filterText
            });
    };



    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleClick(event) {

        this.refs[this.state.currentPage].parentElement.classList.toggle("active");


        this.setState({
            currentPage: Number(event.target.id)
        });

        event.target.parentElement.classList.toggle("active");

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
        };

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
        };


        // Card Chart 3
        const cardChartData3 = {
            labels: ['Jun 9', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13'],
            datasets: [
                {
                    label: 'CTR',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: this.state.allAdsData.ctr

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
        };

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
                    ticks: {
                        display: false,
                        min: Math.min.apply(Math, cardChartData4.datasets[0].data) - 0.5,
                        max: Math.max.apply(Math, cardChartData4.datasets[0].data) + 1.5,
                    }
                }]
            }
        };



        const ads = this.state.products;
        const currentPage = this.state.currentPage;
        const adsPerPage = this.state.adsPerPage;

        const indexOfLastAd = currentPage * adsPerPage;
        const indexOfFirstAd = indexOfLastAd - adsPerPage;
        const currentAds = ads.slice(indexOfFirstAd, indexOfLastAd);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(ads.length / adsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {

            let pageNumber;
            const otherpages =  <li className="page-item"><a className="page-link" key={number} ref={number} id={number} onClick={this.handleClick}>{number}</a></li>;
            const pageOne =  <li className="page-item active"><a className="page-link" key={number} ref={number} id={number} onClick={this.handleClick}>{number}</a></li>;
            if(number === 1){
                pageNumber = pageOne;
            }
            else {
                pageNumber = otherpages;
            }
            return (
                {pageNumber}
            );
        });
        const params = new URLSearchParams(this.props.location.search);
        date = params.get('date');
        this.state.account = params.get('account')



        return (
            <div className="app">
                <Header />
                <div className="app-body">

                    <main className="main">
                        <Breadcrumb />
                        <div className="container-fluid">
            <div className="animated fadeIn">
                <h6 style={{textAlign: 'center', fontWeight: 'normal'}}>METRICS FOR THE ACCOUNT <strong>{this.state.account}</strong> ON <strong>{date}</strong></h6>
                <br/>

                <div className="row">

                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-inverse card-primary">
                            <div className="card-block pb-0">

                                <h4 className="mb-0">{this.state.impressions[4]}</h4>
                                <p>Total Impressions of all ads</p>
                            </div>
                            <div className="chart-wrapper px-3">
                                <Line data={cardChartData1} options={cardChartOpts1} height={130}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-inverse card-info">
                            <div className="card-block pb-0">
                                <h4 className="mb-0">{this.state.clicks[4]}</h4>
                                <p>Total Clicks on all ads</p>
                            </div>
                            <div className="chart-wrapper px-3">
                                <Line data={cardChartData2} options={cardChartOpts2} height={130}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-inverse card-warning">
                            <div className="card-block pb-0">
                                <h4 className="mb-0">{this.state.ctr[4]}%</h4>
                                <p>Average CTR of all ads</p>
                            </div>
                            <div className="chart-wrapper">
                                <Line data={cardChartData3} options={cardChartOpts3} height={130}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-inverse card-danger">
                            <div className="card-block pb-0">
                                <h4 className="mb-0">${this.state.cost[4]}</h4>
                                <p>Total cost of all ads</p>
                            </div>
                            <div className="chart-wrapper px-3">
                                <Bar data={cardChartData4} options={cardChartOpts4} height={130}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">

                    <div className="card-footer">
                        <ul>
                            <li>
                                <div className="text-muted">Total Google Search Queries triggered</div>
                                <strong>{this.state.allAdsData.searchQueries}</strong>
                            </li>

                            <li>
                                <div className="text-muted">Average Position of all ads</div>
                                <strong>{this.state.allAdsData.position}</strong>
                            </li>
                            <li className="hidden-sm-down">
                                <div className="text-muted">Average Cost per Click (CPC) yesterday</div>
                                <strong>${this.state.allAdsData.cpc}</strong>
                            </li>
                            <li className="hidden-sm-down">
                                <div className="text-muted">Average Cost per Thousand Impressions (CPM) yesterday</div>
                                <strong>${this.state.allAdsData.cpm}</strong>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12">
                        <div className="card">

                            <div className="card-block">
                                <h6 style={{textAlign: 'center', fontWeight: 'normal'}}>ALL CAMPAIGNS FOR THE ACCOUNT <strong>{this.state.account}</strong> THAT TRIGGERED ON <strong>{date}</strong></h6>


                                <div className="form-group row">
                                    <div className="col-md-3">
                                        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/></div>
                                </div>
                                <ProductTable products={currentAds} filterText={this.state.filterText}/>
                                <br/>


                                <nav>
                                    <ul className="pagination">
                                        {renderPageNumbers.map(function (object) {
                                            return object.pageNumber;
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

class SearchBar extends Component {
    handleChange() {
        this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render() {
        return (
            <div>

                <input type="text" id="table-search" name="text-input" className="form-control" placeholder="Search by Campaign Name" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

            </div>

        );
    }

}

class ProductTable extends Component {


    sortColumn(n, event) {

        let rows, i, x, y, shouldSwitch, switchcount = 0;
        let switching = true;
        let dir = "asc";
        while(switching) {
            switching = false;
            rows = event.target.parentElement.parentElement.parentElement.children[1].children;
            for(i = 0; i < rows.length-1; i++) {
                shouldSwitch = false;
                x = rows[i].children[n];
                y = rows[i+1].children[n];

                if(n === 5){
                    if (dir === "asc") {
                        if(parseInt(x.children[0].children[0].innerText)  > parseInt(y.children[0].children[0].innerText)) {
                            shouldSwitch= true;
                            break;
                        }
                    }
                    else if(dir === "desc") {
                        if (parseInt(x.children[0].children[0].innerText) <  parseInt(y.children[0].children[0].innerText)) {
                            //if so, mark as a switch and break the loop:
                            shouldSwitch= true;
                            break;
                        }
                    }
                }
                else {
                    if(n != 1) {
                        if (dir === "asc") {
                            if (parseInt(x.children[0].innerText) > parseInt(y.children[0].innerText)) {
                                shouldSwitch = true;
                                break;
                            }
                        }
                        else if (dir === "desc") {
                            if (parseInt(x.children[0].innerText) < parseInt(y.children[0].innerText)) {
                                //if so, mark as a switch and break the loop:
                                shouldSwitch = true;
                                break;
                            }
                        }
                    }
                    else {
                        if (dir === "asc") {
                            if (x.children[0].innerText.toLowerCase() > y.children[0].innerText.toLowerCase()) {
                                shouldSwitch = true;
                                break;
                            }
                        }
                        else if (dir === "desc") {
                            if (x.children[0].innerText.toLowerCase() < y.children[0].innerText.toLowerCase()) {
                                //if so, mark as a switch and break the loop:
                                shouldSwitch = true;
                                break;
                            }
                        }
                    }
                }


            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                 and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount ++;
            }
            else {
                if (switchcount === 0 && dir === "asc") {
                    dir = "desc";
                    switching = true;
                }
            }

        }
    }

    render() {
        let filterText = this.props.filterText;
        let product = this.props.products.map(function(product, index) {
            if (product.campaign.indexOf(filterText) === -1) {
                return;
            }
            return (<ProductRow product={product}  key={index}/>)
        });
        return (
            <div>

                <table className="table table-hover table-outline mb-0 table-bordered">
                    <thead className="thead-default">
                    <tr>
                        <th className="text-center" onClick={this.sortColumn.bind(this, 0)}>Campaign Name</th>
                        <th className="text-center" ref="score" onClick={this.sortColumn.bind(this, 1)}>Overall Score</th>

                    </tr>
                    </thead>

                    <tbody>
                    {product}

                    </tbody>

                </table>
            </div>
        );

    }

}

class ProductRow extends Component {

    constructor(props) {
        super(props)
    }


    redirectToAdGroupPage(campaign, event) {



        window.location.href = "/campaign/ad-group?campaign="+campaign+"&date="+date
    }

    render() {

        return (
            <tr onClick={this.redirectToAdGroupPage.bind(this, this.props.product.campaign)}>
                <Cell cellData={{
                    "type": "campaign",
                    value: this.props.product.campaign,
                    id: this.props.product.campaign
                }}/>
                <Cell cellData={{
                    type: "score",
                    value: this.props.product.score,
                    id: this.props.product.campaign
                }}/>
            </tr>
        );

    }

}

class Cell extends Component {

    render() {

        const type = this.props.cellData.type;

        let progressBar = null;
        let div;

        if(type === "score") {
            let score = parseInt(this.props.cellData.value);

            if(score >= 8 && score <= 10){
                progressBar = <Progress className="progress-xs" color="success" value={score * 10} />;
            }
            else if(score >= 5 && score <= 7){
                progressBar = <Progress className="progress-xs" color="warning" value={score * 10} />;
            }
            else {
                progressBar = <Progress className="progress-xs" color="danger" value={score * 10} />;
            }
            div =  <div> <strong>{this.props.cellData.value} </strong></div>
        }
        else {
            div =  <div>{this.props.cellData.value}</div>
        }
        return (
            <td className="text-center" ref={this.props.cellData.type}>
                {div}
                {progressBar}
            </td>

        );

    }

}

export default Campaign;
