import React from 'react';
import logo from '../../logo.svg';
import './resultsTable.css'

export default class ResultsTable extends  React.Component{

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps){

        }
    }

    render(){
        return(
            <div className="spaced">
                <h2>Current progress {this.props.basicInfo.finishedTeams}/{this.props.basicInfo.totalTeams}
                    {
                        this.props.basicInfo.finishedTeams !== this.props.basicInfo.totalTeams ?
                        <img src={logo}
                             alt="Team building ppl"
                             className="loading-indicator"/> : null }
                </h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Team</th>
                    <th scope="col">Room</th>
                    <th scope="col" className="d-none d-sm-table-cell">Status</th>
                    <th scope="col">Time</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.teamStatus.map(team => (
                        <tr key={team.id}
                            className={team.finished ? 'table-success' : ''}>
                            <th scope="row">{team.name}</th>
                            <td>{team.roomName}</td>
                            <td className="d-none d-sm-table-cell">{team.finished ? 'Finished' : 'In progress'}</td>
                            <td>{team.finished? team.timeElaplsed: '-'}</td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
            </div>


                )
    }
}