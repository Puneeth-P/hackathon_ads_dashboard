import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {Progress } from 'reactstrap';
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
        adsPerPage: 10
    };
      this.state.products = [
          {
              adId: "94045596868",
              adGroup: "USA:ENG:$:PT:AMER:USA:CA:Yosemite_National_Park:180672:Yosemite_National_Park:180672:D:EC::",
              ctr: "23.45%",
              cost: "23",
              pos: "1.2",
              score: "9",
          },
          {
              adId: "23476239",
              adGroup: "USA:ENG:$:PT:AMER:MEX:XX:Mexico:117:Mexico:117:D:NC::",
              ctr: "10.67%",
              cost: "54.1",
              pos: "2.6",
              score: "6",
          },

          {
              adId: "8346234992347",
              adGroup: "USA:ENG:$:PT:AMER:USA:XX:X:X:X:X:F:NC:",
              ctr: "0.02%",
              cost: "78",
              pos: "4.6",
              score: "3",
          },

          {
              adId: "87234503",
              adGroup: "USA:ENG:$:PT:AMER:USA:CA:Beach_Cities:178304:Hotel_Del_Coronado:PE7496:E:NC:",
              ctr: "3.4%",
              cost: "13.4",
              pos: "2.4",
              score: "7",
          },
          {
              adId: "2139481234",
              adGroup: "USA:ENG:$:PT:AMER:USA:NV:Las_Vegas:178276:Tahiti_Village_Resort_&_Spa:PE1445791:M:NC:",
              ctr: "0.01%",
              cost: "63",
              pos: "3.8",
              score: "2",
          }

      ]
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

      return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-primary">
              <div className="card-block pb-0">

                <h4 className="mb-0">3,524,224</h4>
                <p>Total Impressions of all ads yesterday</p>
              </div>
              <div className="chart-wrapper px-3">
                <Line data={cardChartData1} options={cardChartOpts1} height={130}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-info">
              <div className="card-block pb-0">
                <h4 className="mb-0">203,476</h4>
                <p>Total Clicks on all ads yesterday</p>
              </div>
              <div className="chart-wrapper px-3">
                <Line data={cardChartData2} options={cardChartOpts2} height={130}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-warning">
              <div className="card-block pb-0">
                <h4 className="mb-0">5.77%</h4>
                <p>Average CTR of all ads yesterday</p>
              </div>
              <div className="chart-wrapper">
                <Line data={cardChartData3} options={cardChartOpts3} height={130}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <h4 className="mb-0">$469,534.88</h4>
                <p>Total cost of all ads yesterday</p>
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
                <div className="text-muted">Total Google Search Queries triggered yesterday</div>
                <strong>382,699</strong>
              </li>
              <li className="hidden-sm-down">
                <div className="text-muted">Total Unique Keywords triggered yesterday</div>
                <strong>127,566</strong>
              </li>
              <li>
                <div className="text-muted">Average Position of all ads yesterday</div>
                <strong>2.4</strong>
              </li>
              <li className="hidden-sm-down">
                <div className="text-muted">Average Cost per Click (CPC) yesterday</div>
                <strong>$2.31</strong>
              </li>
              <li className="hidden-sm-down">
                <div className="text-muted">Average Cost per Thousand Impressions (CPM) yesterday</div>
                <strong>$133.23</strong>
              </li>
            </ul>
          </div>
        </div>



        <div className="row">
          <div className="col-md-12">
            <div className="card">

              <div className="card-block">
                <h6 style={{textAlign: 'center'}}>ADS TRIGGERED YESTERDAY</h6>


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
                  <th className="text-center" onClick={this.sortColumn.bind(this, 1)} >Ad Group</th>
                  <th className="text-center" onClick={this.sortColumn.bind(this, 2)}>CTR</th>
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

    redirectToAdPage(adId, event) {

        window.location.href = "/dashboard/ad?id=" +adId;
    }

    render() {

        return (
            <tr onClick={this.redirectToAdPage.bind(this, this.props.product.adId)}>
              <Cell cellData={{
                "type": "adId",
                  value: this.props.product.adId,
                  id: this.props.product.adId
              }}/>
              <Cell cellData={{
                  type: "adGroup",
                  value: this.props.product.adGroup,
                  id: this.props.product.adId
              }}/>
              <Cell  cellData={{
                  type: "ctr",
                  value: this.props.product.ctr,
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

export default withRouter(Dashboard);