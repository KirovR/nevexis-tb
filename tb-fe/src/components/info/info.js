import React from "react";
import './info.css'

export default class Info extends  React.Component{


    render(){
        return(
            <div>
                <h2>Hello explorer!</h2>
                <p>It was my task to organize the team building for Nevexis.</p>
                <p>However I was pretty busy watching cats on the internet so I delegated this task to my indian contractor.</p>
                <p>He did a pretty good job organizing the event, but somehow I cannot read his email to me with the location of the event.</p>
                <p>The contents look encrypted with AES encryption and I don't have the key.</p>
                <p>Fortunatelly I know that the Indian guy left some traces. I need you to find all the parts of the key. This way I'll be able to decode the message.</p>
                <p>
                    <a href="https://docs.google.com/spreadsheets/d/1vcUGd2zY41a1w3NXjtIJ_30t5IPYODYed_p8Jh_KoHk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Divide into teams </a>
                    and spread out to find all missing pieces. Once found submit them to me.
                </p>
            </div>

        )
    }
}