import React, { Component } from 'react';
import logo from '../../ad.png'





let arr// ->Change this to get data from axios;


export default class Google_Advert2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adData : [],

        };

        arr = this.props.data;


    }





    render() {
        var advt_arr = [];

            advt_arr.push(<Advert/>);
            advt_arr.push(<br/>);
            advt_arr.push(<br/>);

        return (<div className="abhi_Google_Advert">{advt_arr}</div>);
    }
}

class Advert extends Component {

    render() {




        return (
            <div className="Advert" >
                <Heading value = {arr.heading_1 + " - " + arr.heading_1} name ={arr.url}/>
                <Landing_pg value = {arr.landing_page}/>
                <Description value = {arr.description}/>
            </div>

        );
    }
}


class Heading extends Component {
    render() {
        var str = <a className="abhi_a" target="_blank" href={this.props.name}><div className="abhi_Heading" >
            {this.props.value}
        </div></a>
        return (str);
    }
}

class Landing_pg extends Component {
    render() {
        return(
            <div>
                <img src={logo} className="abhi_Ad-logo" alt="ad"/>
                <span className="abhi_Landing_page">
            {this.props.value}
        </span>
            </div>
        );
    }
}

class Description extends Component {
    render() {
        var element1 = <div className="abhi_Description" >{this.props.value}</div>
        var string_data = element1.props.children;

        var ele = (<span style={{fontSize:13}}>
                {string_data}
          </span>
        );
        return(<div className="Description">{ele}</div>);
    }
}
