import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import SubmitCode from "./components/submit-code/submitCode";
import ResultsTable from "./components/results-table/resultsTable";
import tb from './resources/tb.jpg'
import AppService from "./services/appService";
import Info from "./components/info/info";
import AddressInformation from "./components/address-information/addressInformation";

class App extends Component {

    constructor(props){
        super(props);
        this.state =  {
            teamStatuses: [],
            basicInfo: {
                totalTeams: 0,
                finishedTeams: 0
            },
            codeSubmitStatus: null,
            addressInformation: {
                visible: false,
                address: ""
            }};

        this.appService = new AppService();

        this.getTeamStatuses();


        this.poller = setInterval(() => {
            this.getTeamStatuses();
            console.log('totalItems' + this.state.basicInfo.totalTeams);
            console.log('finishedTeams' + this.state.basicInfo.finishedTeams);
            console.log(this.state.basicInfo.totalTeams === this.state.basicInfo.finishedTeams);
            if(this.state.basicInfo.totalTeams > 0
                && this.state.basicInfo.totalTeams === this.state.basicInfo.finishedTeams){
                clearInterval(this.poller);
                console.log("poller stopped");
            }
        }, 15000);
    }

    getTeamStatuses = () => {
        this.appService.getTeamStatuses().then(response =>{
            this.setState({
                teamStatuses: response.data.statuses,
                basicInfo: response.data.basicInfo,
                addressInformation: response.data.addressInformation});
        });
    };


    submitCode = (code) =>{
        this.appService.submitCode(code).then(response => {
            const code = response.data;
            this.setState({codeSubmitStatus: code});
            if(code === "SUCCESS"){
                this.getTeamStatuses();
            }
        });
    };



  render() {
    return (
      <div className="App">
          <div className="container">
              <img src={tb}
                   alt=""
                   className="header-image"/>
              <div className="row">
                  <div className="col-sm">
                      {this.state.addressInformation.visible ?
                           <AddressInformation message={this.state.addressInformation.address} /> : <Info/>
                      }
                      {
                          !this.state.addressInformation.visible ?
                              <SubmitCode codeSubmitStatus = {this.state.codeSubmitStatus}
                                          onSubmit={this.submitCode}/> : null
                      }


                      <ResultsTable teamStatus={this.state.teamStatuses}
                                    basicInfo={this.state.basicInfo}/>
                  </div>

              </div>
          </div>
      </div>
    );
  }
}

export default App;
