import React, { Component } from 'react';
import {Progress } from 'reactstrap';
import Breadcrumb from '../../../components/Breadcrumb/';
import Header from '../../../components/Header';
import axios from 'axios';

let date;

class AdGroup extends Component {

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
            campaign : ""

        };
        // this.state.products = [
        //     {
        //         id: "1",
        //         adGroup: "USA:ENG:$:PT:AMER:USA:CA:Yosemite_National_Park:180672:Yosemite_National_Park:180672:D:EC::",
        //         impressions: "757",
        //         clicks: "87",
        //         cost: "23",
        //         pos: "1.2",
        //         score: "9",
        //     },
        //     {
        //         id: "2",
        //         adGroup: "USA:ENG:$:PT:AMER:MEX:XX:Mexico:117:Mexico:117:D:NC::",
        //         impressions: "757",
        //         clicks: "12",
        //         cost: "54.1",
        //         pos: "2.6",
        //         score: "6",
        //     },
        //
        //     {
        //         id: "3",
        //         adGroup: "USA:ENG:$:PT:AMER:USA:XX:X:X:X:X:F:NC:",
        //         impressions: "237",
        //         clicks: "97",
        //         cost: "78",
        //         pos: "4.6",
        //         score: "3",
        //     },
        //
        //     {
        //         id: "4",
        //         adGroup: "USA:ENG:$:PT:AMER:USA:CA:Beach_Cities:178304:Hotel_Del_Coronado:PE7496:E:NC:",
        //         impressions: "87",
        //         clicks: "123",
        //         cost: "13.4",
        //         pos: "2.4",
        //         score: "7",
        //     },
        //     {
        //         id: "5",
        //         adGroup: "USA:ENG:$:PT:AMER:USA:NV:Las_Vegas:178276:Tahiti_Village_Resort_&_Spa:PE1445791:M:NC:",
        //         impressions: "123",
        //         clicks: "13",
        //         cost: "63",
        //         pos: "3.8",
        //         score: "2",
        //     }
        //
        // ]
    }

    componentDidMount() {
        let _this = this;
        this.serverRequest =
            axios
                .get("http://127.0.0.1:3004/get")
                .then(function(result) {
                    console.log(result);
                    _this.setState({
                        products: result.data.adGroupInfo,
                        campaign: result.data.campaign

                    });
                })

    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    handleUserInput(filterText) {
        this.setState({filterText: filterText});
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

        return (
            <div className="app">
                <Header />
                <div className="app-body">

                    <main className="main">
                        <Breadcrumb />
                        <div className="container-fluid">
                            <div className="animated fadeIn">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">

                                            <div className="card-block">
                                                <h6 style={{textAlign: 'center', fontWeight: 'normal'}}>ALL AD GROUPS FOR THE CAMPAIGN <strong>{this.state.campaign} </strong>THAT TRIGGERED ON <strong>{date}</strong> </h6>

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

                <input type="text" id="table-search" name="text-input" className="form-control" placeholder="Search by Ad Group" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

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
                        if(parseInt(x.children[0].children[0].innerText, 10)  > parseInt(y.children[0].children[0].innerText, 10)) {
                            shouldSwitch= true;
                            break;
                        }
                    }
                    else if(dir === "desc") {
                        if (parseInt(x.children[0].children[0].innerText, 10) <  parseInt(y.children[0].children[0].innerText, 10)) {
                            //if so, mark as a switch and break the loop:
                            shouldSwitch= true;
                            break;
                        }
                    }
                }
                else {
                    if(n !== 1) {
                        if (dir === "asc") {
                            if (parseInt(x.children[0].innerText, 10) > parseInt(y.children[0].innerText, 10)) {
                                shouldSwitch = true;
                                break;
                            }
                        }
                        else if (dir === "desc") {
                            if (parseInt(x.children[0].innerText, 10) < parseInt(y.children[0].innerText, 10)) {
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
            if (product.adGroup.indexOf(filterText) === -1) {
                return;
            }
            return (<ProductRow product={product}  key={index}/>)
        });
        return (
            <div>

                <table className="table table-hover table-outline mb-0 table-bordered">
                    <thead className="thead-default">
                    <tr>

                        <th className="text-center" onClick={this.sortColumn.bind(this, 0)} >Ad Group</th>
                        <th className="text-center" onClick={this.sortColumn.bind(this, 1)} >Impressions</th>
                        <th className="text-center" onClick={this.sortColumn.bind(this, 2)}>Clicks</th>
                        <th className="text-center" onClick={this.sortColumn.bind(this, 3)}>Cost ($)</th>
                        <th className="text-center" onClick={this.sortColumn.bind(this, 4)}>Avg Position</th>
                        <th className="text-center" ref="score" onClick={this.sortColumn.bind(this, 5)}>Overall Score</th>

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




    redirectToAdPage(adGroup, event) {



        window.location.href = "/campaign/ad-group/ads?adGroup=" +adGroup+"&date="+date;
    }

    render() {

        return (
            <tr onClick={this.redirectToAdPage.bind(this, this.props.product.adGroup)}>
                <Cell cellData={{
                    type: "adGroup",
                    value: this.props.product.adGroup,
                    id: this.props.product.adGroup
                }}/>
                <Cell cellData={{
                    type: "impressions",
                    value: this.props.product.totalImpressions,
                    id: this.props.product.adGroup
                }}/>
                <Cell  cellData={{
                    type: "clicks",
                    value: this.props.product.totalClicks,
                    id: this.props.product.adGroup
                }}/>
                <Cell cellData={{
                    type: "cost",
                    value: this.props.product.totalCost,
                    id: this.props.product.adGroup
                }}/>
                <Cell cellData={{
                    type: "pos",
                    value: this.props.product.totaAvgPos,
                    id: this.props.product.adGroup
                }}/>
                <Cell cellData={{
                    type: "score",
                    value: this.props.product.agScore,
                    id: this.props.product.adGroup
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
            let score = parseInt(this.props.cellData.value, 10);

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

export default AdGroup;
