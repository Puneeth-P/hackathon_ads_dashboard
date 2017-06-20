import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {Progress } from 'reactstrap';
import { withRouter } from 'react-router'
import axios from 'axios';


const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';


let date;



class Dashboard extends Component {

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
        adGroupName: "",
        impressions: "" ,
        clicks: "",
        pos: "",
        cost: ""



    };
      // this.state.products = [
      //     {
      //         adId: "94045596868",
      //         ctr: "23.45%",
      //         cost: "23",
      //         pos: "1.2",
      //         score: "9",
      //     },
      //     {
      //         adId: "23476239",
      //         ctr: "10.67%",
      //         cost: "54.1",
      //         pos: "2.6",
      //         score: "6",
      //     },
      //
      //     {
      //         adId: "8346234992347",
      //         ctr: "0.02%",
      //         cost: "78",
      //         pos: "4.6",
      //         score: "3",
      //     },
      //
      //     {
      //         adId: "87234503",
      //         ctr: "3.4%",
      //         cost: "13.4",
      //         pos: "2.4",
      //         score: "7",
      //     },
      //     {
      //         adId: "2139481234",
      //         ctr: "0.01%",
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
                .get("http://127.0.0.1:3006/get")
                .then(function(result) {
                    console.log(result);
                    _this.setState({
                        products: result.data.adIdData,
                        adGroupName: result.data.adGroupData.adGroup,
                        impressions: result.data.adGroupData.totalImpressions,
                        pos: result.data.adGroupData.totaAvgPos,
                        clicks: result.data.adGroupData.totalClicks,
                        cost: result.data.adGroupData.totalCost
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


//       // Card Chart 1
//       const cardChartData1 = {
//           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//           datasets: [
//               {
//                   label: 'Impressions ',
//                   backgroundColor: brandPrimary,
//                   borderColor: 'rgba(255,255,255,.55)',
//                   data: [65, 59, 84, 84, 51, 55, 40]
//               }
//           ],
//       };
//
//       const cardChartOpts1 = {
//           maintainAspectRatio: false,
//           legend: {
//               display: false
//           },
//           scales: {
//               xAxes: [{
//                   gridLines: {
//                       color: 'transparent',
//                       zeroLineColor: 'transparent'
//                   },
//                   ticks: {
//                       fontSize: 2,
//                       fontColor: 'transparent',
//                   }
//
//               }],
//               yAxes: [{
//                   display: false,
//                   ticks: {
//                       display: false,
//                       min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
//                       max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
//                   }
//               }],
//           },
//           elements: {
//               line: {
//                   borderWidth: 1
//               },
//               point: {
//                   radius: 4,
//                   hitRadius: 10,
//                   hoverRadius: 4,
//               },
//           }
//       }
//
// // Card Chart 2
//       const cardChartData2 = {
//           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//           datasets: [
//               {
//                   label: 'My First dataset',
//                   backgroundColor: brandInfo,
//                   borderColor: 'rgba(255,255,255,.55)',
//                   data: [1, 18, 9, 17, 34, 22, 11]
//               }
//           ],
//       };
//
//       const cardChartOpts2 = {
//           maintainAspectRatio: false,
//           legend: {
//               display: false
//           },
//           scales: {
//               xAxes: [{
//                   gridLines: {
//                       color: 'transparent',
//                       zeroLineColor: 'transparent'
//                   },
//                   ticks: {
//                       fontSize: 2,
//                       fontColor: 'transparent',
//                   }
//
//               }],
//               yAxes: [{
//                   display: false,
//                   ticks: {
//                       display: false,
//                       min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
//                       max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
//                   }
//               }],
//           },
//           elements: {
//               line: {
//                   tension: 0.00001,
//                   borderWidth: 1
//               },
//               point: {
//                   radius: 4,
//                   hitRadius: 10,
//                   hoverRadius: 4,
//               },
//           }
//       }
//
// // Card Chart 3
//       const cardChartData3 = {
//           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//           datasets: [
//               {
//                   label: 'My First dataset',
//                   backgroundColor: 'rgba(255,255,255,.2)',
//                   borderColor: 'rgba(255,255,255,.55)',
//                   data: [78, 81, 80, 45, 34, 12, 40]
//               }
//           ],
//       };
//
//       const cardChartOpts3 = {
//           maintainAspectRatio: false,
//           legend: {
//               display: false
//           },
//           scales: {
//               xAxes: [{
//                   display: false
//               }],
//               yAxes: [{
//                   display: false
//               }],
//           },
//           elements: {
//               line: {
//                   borderWidth: 2
//               },
//               point: {
//                   radius: 0,
//                   hitRadius: 10,
//                   hoverRadius: 4,
//               },
//           }
//       }
//
// // Card Chart 4
//       const cardChartData4 = {
//           labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//           datasets: [
//               {
//                   label: 'My First dataset',
//                   backgroundColor: 'rgba(255,255,255,.3)',
//                   borderColor: 'transparent',
//                   data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
//               }
//           ],
//       };
//
//       const cardChartOpts4 = {
//           maintainAspectRatio: false,
//           legend: {
//               display: false
//           },
//           scales: {
//               xAxes: [{
//                   display: false,
//                   barPercentage: 0.6,
//               }],
//               yAxes: [{
//                   display: false,
//               }]
//           }
//       };

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
      this.state.adGroupName = params.get('adGroup');

      return (
      <div className="animated fadeIn">
          <h6 style={{textAlign :"center"}}>METRICS FOR THE AD GROUP : <strong>{this.state.adGroupName} </strong> on <strong>{date}</strong></h6>
          <br/>

          <div className="row">
              <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-primary">
                      <div className="card-block pb-0">

                          <h4 className="mb-0">{this.state.impressions}</h4>
                          <p>Total Impressions for this Ad Group</p>
                      </div>

                  </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-info">
                      <div className="card-block pb-0">
                          <h4 className="mb-0">{this.state.clicks}</h4>
                          <p>Total Clicks for this Ad Group</p>
                      </div>

                  </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-warning">
                      <div className="card-block pb-0">
                          <h4 className="mb-0">{this.state.pos}</h4>
                          <p>Average Position for this Ad Group</p>
                      </div>

                  </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                  <div className="card card-inverse card-danger">
                      <div className="card-block pb-0">
                          <h4 className="mb-0">${this.state.cost}</h4>
                          <p>Total Cost for this Ad Group</p>
                      </div>

                  </div>
              </div>
          </div>

          {/*<div className="card" style={{marginTop : -20}}>*/}

              {/*<div className="card-footer">*/}


                  {/*<ul>*/}
                      {/*<li>*/}
                          {/*<div className="text-muted">Total Impressions for this Ad Group</div>*/}
                          {/*<strong>{this.state.impressions}</strong>*/}
                      {/*</li>*/}
                      {/*<li>*/}
                          {/*<div className="text-muted">Total Clicks for this Ad Group</div>*/}
                          {/*<strong>{this.state.clicks}</strong>*/}
                      {/*</li>*/}
                      {/*<li className="hidden-sm-down">*/}
                          {/*<div className="text-muted">Average Position for this Ad Group</div>*/}
                          {/*<strong>{this.state.pos}</strong>*/}
                      {/*</li>*/}
                      {/*<li className="hidden-sm-down">*/}
                          {/*<div className="text-muted">Total Cost for this Ad Group</div>*/}
                          {/*<strong>${this.state.cost}</strong>*/}
                      {/*</li>*/}
                  {/*</ul>*/}
              {/*</div>*/}
          {/*</div>*/}




        <div className="row">
          <div className="col-md-12">
            <div className="card">

              <div className="card-block">
                  <h6 style={{textAlign: 'center', fontWeight: 'normal'}}>ALL ADS FOR THE AD GROUP <strong>{this.state.adGroupName} </strong>THAT TRIGGERED ON <strong>{date}</strong></h6>



                  <div className="form-group row">
                  <div className="col-md-3">
                      <br/>
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

              <input type="text" id="table-search" name="text-input" className="form-control" placeholder="Search by Ad ID" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

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
            if (product.adId.indexOf(filterText) === -1) {
                return;
            }
            return (<ProductRow product={product}  key={index}/>)
        });
        return (
            <div>

              <table className="table table-hover table-outline mb-0 table-bordered">
                <thead className="thead-default">
                <tr>
                  <th className="text-center" onClick={this.sortColumn.bind(this, 0)}>Ad ID</th>
                    <th className="text-center" onClick={this.sortColumn.bind(this, 1)}>CTR</th>
                  <th className="text-center" onClick={this.sortColumn.bind(this, 2)}>Cost ($)</th>
                  <th className="text-center" onClick={this.sortColumn.bind(this, 3)}>Avg Position</th>
                  <th className="text-center" ref="score" onClick={this.sortColumn.bind(this, 4)}>Overall Score</th>

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


    redirectToAdPage(adId, event) {



        window.location.href = "/campaign/ad-group/ads/ad?id=" +adId+ "&date="+date;
    }

    render() {

        return (
            <tr onClick={this.redirectToAdPage.bind(this, this.props.product.adId)}>
              <Cell cellData={{
                "type": "adId",
                  value: this.props.product.adId,
                  id: this.props.product.adId
              }}/>
                <Cell  cellData={{
                  type: "ctr",
                  value: this.props.product.ctr + "%",
                  id: this.props.product.adId
              }}/>
              <Cell cellData={{
                  type: "cost",
                  value: this.props.product.cost,
                  id: this.props.product.adId
              }}/>
              <Cell cellData={{
                  type: "pos",
                  value: this.props.product.pos,
                  id: this.props.product.adId
              }}/>
              <Cell cellData={{
                  type: "score",
                  value: this.props.product.score,
                  id: this.props.product.adId
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

export default Dashboard;
