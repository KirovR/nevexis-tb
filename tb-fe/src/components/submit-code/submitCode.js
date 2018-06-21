import React from 'react';

export default class SubmitCode extends  React.Component{

    constructor(props){
        super(props);
        this.state = {message: '',
        statusColor: ''}
    }

    componentWillReceiveProps(newProps){
        const newMessage = this.decideMessage(newProps.codeSubmitStatus);
        const newCssClass = this.decideWarningLabelType(newProps.codeSubmitStatus);

        this.setState({
            message: newMessage,
            statusColor: newCssClass
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        const {value} = event.target.elements.codeInput;

        this.props.onSubmit(value);
    };

    decideMessage = (stat) => {
        if (stat === 'SUCCESS') {
            return "Thanks! This seems to be the right piece of the code. The code alone is not enough to get the whole location, but it's telling me it's near Doktorskata gradinka, behind the national library. Go there and wait for the others. This page will automatically reload with updated status, once the other teams progress.";
        }else if(stat === 'CODE_NOT_FOUND'){
            return "Ooops! This doesn't look like e proper code piece";
        }else if(stat === 'CODE_ALREADY_SUBMITTED'){
            return "Chill out. This code was already submitted. Go to the Doktorskata gradinka and wait for the others. The last team is expected to finish at about 8:05 PM. The page will automatically reload when the teams progress.";
        }else{
            return null;
        }
    };

    decideWarningLabelType = (stat) =>{
        let cssClasses = "alert ";
        if (stat === 'SUCCESS') {
            return cssClasses + "alert-success";
        }else if(stat === 'CODE_NOT_FOUND'){
            return cssClasses + "alert-danger";
        }else if(stat === 'CODE_ALREADY_SUBMITTED'){
            return cssClasses + "alert-success";
        }
    };

render(){
    return (
        <form onSubmit={this.submitForm}>
            <div className="form-group">
                <label htmlFor="codeInput">If you've found part of the code, submit it here:</label>
                <input type="text"
                       autoComplete="off"
                       className="form-control"
                       id="codeInput"
                       placeholder="XXXXXX"
                name="codeInput"/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit code</button>
            <div className={this.state.statusColor}
                 role="alert">
                {this.state.message}
            </div>

        </form>
    )
}


}